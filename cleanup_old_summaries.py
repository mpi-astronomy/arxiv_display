#!/usr/bin/env python3
"""
Cleanup script to remove arxiv summaries older than 3 months.
This script removes both markdown files and associated asset directories.
"""

import os
import sys
import datetime
import argparse
from glob import glob
import shutil


def get_date_from_line(line):
    """Extract date from a line containing 'Appeared on:'"""
    return line.split('Appeared on:')[-1].split('</mark>')[0].strip()


def extract_appearance_dates(md_files):
    """Extract appearance dates from markdown files"""
    dates = []
    
    for fname in md_files:
        try:
            with open(fname, 'r', encoding='utf-8') as f:
                found_date = False
                for line in f:
                    if not found_date and "Appeared on" in line:
                        found_date = True
                        date_str = get_date_from_line(line)
                        dates.append((fname, date_str))
                        break
        except Exception as e:
            print(f"Warning: Could not process {fname}: {e}")
            continue
    
    return dates


def get_files_older_than_days(file_dates, days):
    """Get files older than specified number of days"""
    cutoff_date = datetime.date.today() - datetime.timedelta(days=days)
    cutoff_str = str(cutoff_date)
    
    old_files = []
    for fname, date_str in file_dates:
        try:
            # Date format is YYYY-MM-DD
            if date_str < cutoff_str:
                old_files.append(fname)
        except Exception as e:
            print(f"Warning: Could not parse date {date_str} for {fname}: {e}")
            continue
    
    return old_files


def get_associated_dirs(md_file, build_dir):
    """Get associated directories for a markdown file"""
    # Extract paper ID from filename (e.g., "2401.02484.md" -> "2401.02484")
    basename = os.path.basename(md_file)
    paper_id = os.path.splitext(basename)[0]
    
    # Look for tmp_* directories that might be associated
    tmp_dir = os.path.join(build_dir, f"tmp_{paper_id}")
    associated_dirs = []
    
    if os.path.exists(tmp_dir) and os.path.isdir(tmp_dir):
        associated_dirs.append(tmp_dir)
    
    return associated_dirs


def cleanup_old_files(build_dir, days=90, dry_run=True):
    """
    Clean up files older than specified days
    
    Args:
        build_dir: Path to _build/html directory
        days: Number of days (default 90 for 3 months)
        dry_run: If True, only show what would be deleted
    """
    
    if not os.path.exists(build_dir):
        print(f"Error: Build directory {build_dir} does not exist")
        return 0, 0
    
    # Find all markdown files
    md_pattern = os.path.join(build_dir, "*.md")
    md_files = glob(md_pattern)
    
    print(f"Found {len(md_files)} markdown files in {build_dir}")
    
    if not md_files:
        print("No markdown files found, nothing to clean up")
        return 0, 0
    
    # Extract dates from files
    file_dates = extract_appearance_dates(md_files)
    print(f"Successfully extracted dates from {len(file_dates)} files")
    
    # Find old files
    old_files = get_files_older_than_days(file_dates, days)
    
    cutoff_date = datetime.date.today() - datetime.timedelta(days=days)
    print(f"Files older than {days} days (before {cutoff_date}): {len(old_files)}")
    
    if not old_files:
        print("No old files found, nothing to clean up")
        return 0, 0
    
    # Find associated directories to remove
    old_dirs = []
    for md_file in old_files:
        associated_dirs = get_associated_dirs(md_file, build_dir)
        old_dirs.extend(associated_dirs)
    
    # Remove duplicates
    old_dirs = list(set(old_dirs))
    
    if dry_run:
        print("\n=== DRY RUN - Would remove the following files ===")
        for f in old_files:
            print(f"  FILE: {f}")
        print(f"\n=== DRY RUN - Would remove the following directories ===")
        for d in old_dirs:
            print(f"  DIR:  {d}")
        print(f"\nTotal: {len(old_files)} files and {len(old_dirs)} directories")
        return len(old_files), len(old_dirs)
    
    # Actually remove files and directories
    removed_files = 0
    removed_dirs = 0
    
    for md_file in old_files:
        try:
            os.remove(md_file)
            print(f"Removed file: {md_file}")
            removed_files += 1
        except Exception as e:
            print(f"Error removing file {md_file}: {e}")
    
    for old_dir in old_dirs:
        try:
            shutil.rmtree(old_dir)
            print(f"Removed directory: {old_dir}")
            removed_dirs += 1
        except Exception as e:
            print(f"Error removing directory {old_dir}: {e}")
    
    print(f"\nCleanup completed: {removed_files} files and {removed_dirs} directories removed")
    return removed_files, removed_dirs


def main():
    parser = argparse.ArgumentParser(description="Clean up old arxiv summaries")
    parser.add_argument("--build-dir", default="docs/_build/html", 
                        help="Path to build directory (default: docs/_build/html)")
    parser.add_argument("--days", type=int, default=90,
                        help="Remove files older than this many days (default: 90)")
    parser.add_argument("--dry-run", action="store_true", default=False,
                        help="Show what would be deleted without actually deleting")
    parser.add_argument("--force", action="store_true", default=False,
                        help="Actually delete files (overrides --dry-run)")
    
    args = parser.parse_args()
    
    # Default to dry run unless --force is specified
    dry_run = not args.force
    if args.dry_run:
        dry_run = True
    
    print(f"Cleanup script starting...")
    print(f"Build directory: {args.build_dir}")
    print(f"Days threshold: {args.days}")
    print(f"Mode: {'DRY RUN' if dry_run else 'ACTUAL DELETION'}")
    print("-" * 50)
    
    removed_files, removed_dirs = cleanup_old_files(args.build_dir, args.days, dry_run)
    
    if dry_run and removed_files > 0:
        print(f"\nTo actually delete these files, run with --force")
        print(f"WARNING: This will permanently delete {removed_files} files and {removed_dirs} directories!")


if __name__ == "__main__":
    main()