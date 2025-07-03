# Cleanup Script Documentation

## Overview

The `cleanup_old_summaries.py` script automatically removes arxiv summaries older than 3 months to prevent the repository from exceeding GitHub's push quota limits.

## How it works

1. **Date Extraction**: The script scans all markdown files in `docs/_build/html/` and extracts the "Appeared on:" date from each file.

2. **Age Filtering**: It identifies files older than the specified threshold (default: 90 days / 3 months).

3. **Associated Assets**: For each old markdown file, it also finds and removes associated directories (like `tmp_PAPERID/` folders containing figures).

4. **Safe Operation**: The script supports a dry-run mode to preview what would be deleted before actual deletion.

## Usage

### Manual cleanup
```bash
# Preview what would be deleted (dry run)
python cleanup_old_summaries.py --dry-run

# Actually delete old files (use with caution)
python cleanup_old_summaries.py --force

# Custom threshold (e.g., 60 days)
python cleanup_old_summaries.py --force --days 60
```

### Automatic cleanup
The script is automatically run in GitHub Actions workflows (`scheduled.yml` and `doc.yml`) before pushing changes to prevent repository size issues.

## Files removed

- Markdown summary files (e.g., `2401.02484.md`) older than 3 months
- Associated asset directories (e.g., `tmp_2401.02484/`) containing figures and other resources

## Configuration

The cleanup threshold can be adjusted by modifying the `--days` parameter in the GitHub workflows or when running manually.

**Default**: 90 days (3 months)

## Safety features

- **Dry run mode**: Always preview changes before deletion
- **Date validation**: Only processes files with valid "Appeared on:" dates
- **Error handling**: Continues operation even if individual files fail to process
- **Logging**: Provides detailed output of all operations

## Impact

Regular cleanup prevents the repository from growing beyond GitHub's limits while preserving recent summaries that are most relevant to users.