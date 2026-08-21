---
title: "Enhancing existing Remote-sensing Datasets with weakly supervised Deep Learning: A Case Study on Antarctic Rock outcrops "
authors: "Felix Dahle, Bert Wouters, Roderik Lindenbergh"
venue: "XXVth ISPRS Congress 2026 (Toronto, Canada)"
year: 2026
description: "We developed a weakly supervised deep-learning framework using a U-Net trained on Sentinel-2 multispectral imagery and elevation data to accurately map Antarctic rock outcrops at a 10 m resolution based on older rock masks. This provides an open-source model for refining existing data sets and refined continent-wide rock mask for cryospheric research."
abstract: |
  Accurate mapping of exposed rock is fundamental for cryospheric and geospatial analyses in Antarctica, yet existing products are of limited resolution and tend to underestimate true rock exposure. We present a weakly supervised deep-learning framework that refines existing rock masks by combining Sentinel-2 multispectral imagery with elevation and slope data from the Reference Elevation Model of Antarctica (REMA). A U-Net with eight input channels (six spectral bands, elevation, slope) is trained using imperfect Landsat- and GeoMap based labels. Trained on data from the Antarctic Peninsula, the model produces a 10 m rock mask that delineates small and shaded outcrops more effectively than existing datasets. While quantitative evaluation is constrained by imperfect reference data, qualitative inspection indicates improved rock–snow separation. The workflow is fully automated, requires no manual annotation, and scales efficiently to all rock-hosting regions of the continent reachable by Sentinel-2 multispectral coverage. Beyond rock mapping, the framework is transferable to other scenarios with incomplete or uncertain reference data, such as vegetation, snow, or water mapping. The resulting rock mask for complete Antarctica, together with the trained model and preprocessing scripts, will be released to support reproducible large-scale mapping and future cryospheric research.
img: "/img/publications/rock_mask.png"
doi: "https://doi.org/10.5194/isprs-annals-XI-3-2026-671-2026"
pdf: "https://isprs-annals.copernicus.org/articles/XI-3-2026/671/2026/isprs-annals-XI-3-2026-671-2026.pdf"
code: "https://github.com/fdahle/sfm-hist-rocks"
openAccess: true
featured: false
tags: [semantic-segmentation, u-net, historical-imagery, deep-learning, antarctica, rocks]
bibtex: |
  @article{isprs-annals-XI-3-2026-671-2026,
    author  = {Dahle, F. and Lindenbergh, R. and Wouters, B.},
    title   = {Enhancing existing Remote-sensing Datasets with weakly supervised Deep Learning: A Case Study on Antarctic Rock outcrops},
    journal = {ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences},
    volume  = {XI-3-2026},
    year    = {2026},
    pages   = {671--678},
    url     = {https://isprs-annals.copernicus.org/articles/XI-3-2026/671/2026/},
    doi     = {10.5194/isprs-annals-XI-3-2026-671-2026}
  }
---
