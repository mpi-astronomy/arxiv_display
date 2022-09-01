.PHONY: help

BUILDDIR   = _build
BUILDOPTS  =
BUILDCMD   = papermill MPIA\ daily\ digest.ipynb log.ipynb

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  html       to make standalone HTML files"
	@echo "  docs       to run the scrapper and generate the files before HTML conversion"

html:
	$(BUILDCMD)
	@echo
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/html."

serve:
	cd $(BUILDDIR)/html && python3 -m http.server