

export const portfolioTitlesQuery = `
  *[_type == "portfolioItem"] | order(order asc){
    _id,
    title
  }
`


export const soloExhibitionsQuery = `
  *[_type == "exhibition" && type == "solo"] | order(year desc){
    _id,
    title,
    year,
    gallery,
    location
  }
`


export const groupExhibitionsQuery = `
  *[_type == "exhibition" && type == "group"] | order(year desc){
    _id,
    title,
    year,
    gallery,
    location
  }
`


export const exhibitionImagesQuery = `
  *[_type == "exhibition" && _id == $id][0]{
    title,
    images[]{
      asset->{
        _id,
        url
      },
      description
    }
  }
`

export const portfolioImagesQuery = `
  *[_type == "portfolioItem" && _id == $id][0]{
    title,
    images[]{
      asset->{
        _id,
        url
      },
      description
    }
  }
`;
