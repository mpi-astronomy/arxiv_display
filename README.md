# MPIA Arxiv Display

This project is a hack born during a science coffee at MPIA between [Iskren Georgiev (@iskreng-y-g)](https://github.com/iskren-y-g) and [Morgan Fouesneau (@mfouesneau)](https://github.com/mfouesneau). This repository generates the screen content for the corridors of the institute. It is a sort of Arxiver for institutes or groups.

This repository "only" hosts a website that supports the institute's displays.

The main goal is provide summaries of daily papers authored or co-authored by MPIA members. Only for those, the summary contains the title, authors, abstract and figures (with captions).

This evolution heavily relies on [arXiv on deck 2](https://mfouesneau.github.io/arxiv_on_deck_2), a package that searches for new articles on [ArXiv](https://arxiv.org/) and renders their summary as Markdown documents. It does not compile the original LaTeX documents and only extracts the relevant information into Markdown files.


## UNDER CONSTRUCTION
todolist

* update script to generate the daily summary. (carousel with days=1)
* add link to log files in the documentation.
* see if github actions can report information about the build.
* polish CSS etc.
