---
title: "Polar perspectives: a deep dive into geo-referencing historical Antarctic photos"
authors: "Felix Dahle, Bert Wouters, Roderik Lindenbergh"
venue: "International Journal of Digital Earth"
year: 2024
description: "We developed a workflow to geo-reference historical aerial imagery with a use-case on the Antarctic Peninsula. Using modern algorithms for tie-point matching (LightGlue), we find similar points on historic and modern Sentinel-2 imagery for geo-referencing. A special focus is the tie-point matching, adapted to work with historical and large-format imagery."
abstract: |
  The utility of historical image repositories is often limited due to the lack of geo-referencing. A good example is the TriMetrogon Aerial (TMA) archive, a collection of historical aerial images of Antarctica between 1940 and 2000. These images are difficult to use, as their geolocation is only approximately, with location errors in the order of tens of km. 
  
  This study addresses this challenge by developing an automated geo-referencing workflow that leverages recent advancements in machine-learning-based tie-point matching. We use the algorithm LightGlue, to establish tie-points between geo-referenced Sentinel-2 satellite imagery and historical non-geo-referenced aerial images. To aid the process, we use already known approximate positions of the historical images. Due to the sub-optimal and inhomogeneous quality of the aerial images, only a portion of the images can be geo-referenced directly by matching. For the remaining images, we employed alternative means of geo-referencing, again based on tie-point matching. Out of a subset of 4,459 images located inside the research area, 3,393 images could be geo-referenced, a percentage of 76%. Reasons for the geo-referencing failing are insufficient contrast or an approximate position too far away from the real position. The workflow can easily be applied to historical images from other archives, to enhance the usability of historical image repositories for scientific research."
img: "/img/publications/georef.png"
doi: "https://doi.org/10.1080/17538947.2024.2406384"
pdf: "https://www.tandfonline.com/doi/epdf/10.1080/17538947.2024.2406384"
code: "https://github.com/fdahle/hist_georef"
openAccess: true
featured: true
tags: [historical-imagery, georeferencing, computer-vision, antarctica, matching]
bibtex: |
  @article{dahle_georef_2024,
    author  = {Felix Dahle and Roderik Lindenbergh and Bert Wouters},
    title   = {Polar perspectives: a deep dive into geo-referencing historical Antarctic photos},
    journal = {International Journal of Digital Earth},
    volume  = {17},
    number  = {1},
    pages   = {2406384},
    year    = {2024},
    publisher = {Taylor & Francis},
    doi     = {10.1080/17538947.2024.2406384},
    url     = {https://doi.org/10.1080/17538947.2024.2406384}
  }
---
