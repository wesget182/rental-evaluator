import { createSlice } from "@reduxjs/toolkit";

export const prop = createSlice({
  // Creating the name of the slice => Correlated to redux store
  name: "prop",
  // initial state reducers wil
  initialState: {
    properties: {
      propertiesForSale: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              Address: '128 Thompson Ave, Mountain View, CA 94043',
              Price: '$1888000',
              Type: 'SINGLE_FAMILY',
              Size: '1384 sqft',
              '# bedrooms': 3,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/c5b0919e74fad9e31f8938a8ae2334e0-p_e.jpg',
              ZPID: '19508831'
            },
            geometry: {
              coordinates: [
                -122.101294,
                37.405182
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '1884 Miramonte Ave, Mountain View, CA 94040',
              Price: '$2488000',
              Type: 'SINGLE_FAMILY',
              Size: '2200 sqft',
              '# bedrooms': 3,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/63764232d0d0f3c3df3442875a1db813-p_e.jpg',
              ZPID: '19529856'
            },
            geometry: {
              coordinates: [
                -122.087425,
                37.369222
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '2090 Sunnyview Ln, Mountain View, CA 94040',
              Price: '$3098000',
              Type: 'SINGLE_FAMILY',
              Size: '2259 sqft',
              '# bedrooms': 4,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/c4f2cd63e7e39906145790331ccb8291-p_e.jpg',
              ZPID: '19536263'
            },
            geometry: {
              coordinates: [
                -122.074024,
                37.37258
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '433 Sylvan Ave SPACE 128, Mountain View, CA 94041',
              Price: '$299000',
              Type: 'MANUFACTURED',
              Size: '1608 sqft',
              '# bedrooms': 3,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/d99730dc40f91683c78546d75b1d9510-p_e.jpg',
              ZPID: '2070244628'
            },
            geometry: {
              coordinates: [
                -122.059409,
                37.383185
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '440 Moffett Blvd SPACE 76, Mountain View, CA 94043',
              Price: '$230000',
              Type: 'SINGLE_FAMILY',
              Size: '967 sqft',
              '# bedrooms': 3,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/7992147dee28dab5cc14e642918fce4d-p_e.jpg',
              ZPID: '2070276867'
            },
            geometry: {
              coordinates: [
                -122.07362,
                37.40011
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '530 W Dana St, Mountain View, CA 94041',
              Price: '$2495000',
              Type: 'SINGLE_FAMILY',
              Size: '2006 sqft',
              '# bedrooms': 4,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/22697e4f8ebf3fb53f522b2495c22c86-p_e.jpg',
              ZPID: '19515303'
            },
            geometry: {
              coordinates: [
                -122.076954,
                37.391669
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '730 Cuesta Dr, Mountain View, CA 94040',
              Price: '$2199000',
              Type: 'SINGLE_FAMILY',
              Size: '1178 sqft',
              '# bedrooms': 3,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/c2390fa505dd56eed8a136e29d20116d-p_e.jpg',
              ZPID: '19533459'
            },
            geometry: {
              coordinates: [
                -122.083472,
                37.373917
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '255 S Rengstorff Ave APT 130, Mountain View, CA 94040',
              Price: '$800000',
              Type: 'CONDO',
              Size: '1003 sqft',
              '# bedrooms': 2,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/569477a6bf7f67b0718229f2ebbf68ba-p_e.jpg',
              ZPID: '19514643'
            },
            geometry: {
              coordinates: [
                -122.098888,
                37.399552
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '128 Alley Way, Mountain View, CA 94040',
              Price: '$1488888',
              Type: 'TOWNHOUSE',
              Size: '1424 sqft',
              '# bedrooms': 3,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/9ecfa5a4d7c0efa6c20af9684c59916b-p_e.jpg',
              ZPID: '19510702'
            },
            geometry: {
              coordinates: [
                -122.105568,
                37.405836
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '38 Devonshire Ave APT 5, Mountain View, CA 94043',
              Price: '$1358000',
              Type: 'TOWNHOUSE',
              Size: '1308 sqft',
              '# bedrooms': 3,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/42f7b3e3434b0c44c1d0bb95a0d8386d-p_e.jpg',
              ZPID: '19517140'
            },
            geometry: {
              coordinates: [
                -122.059582,
                37.404168
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '213 Granada Park Cir, Mountain View, CA 94043',
              Price: '$1890000',
              Type: 'TOWNHOUSE',
              Size: '1904 sqft',
              '# bedrooms': 3,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/74d6cb1377f4ad9a2bad92d9ca34d445-p_e.jpg',
              ZPID: '79531625'
            },
            geometry: {
              coordinates: [
                -122.084982,
                37.399483
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '556 Farley St, Mountain View, CA 94043',
              Price: '$3880000',
              Type: 'SINGLE_FAMILY',
              Size: '3219 sqft',
              '# bedrooms': 4,
              '# bathrooms': 5,
              Image: 'https://photos.zillowstatic.com/fp/47b57f7daee55a22b31d160bc195437c-p_e.jpg',
              ZPID: '19511149'
            },
            geometry: {
              coordinates: [
                -122.089375,
                37.404453
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '325 Sylvan Ave #42, Mountain View, CA 94041',
              Price: '$310000',
              Type: 'MANUFACTURED',
              Size: '1316 sqft',
              '# bedrooms': 3,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/0ce2f4b1d5c1726e464b848cb3f1b8ef-p_e.jpg',
              ZPID: '325804732'
            },
            geometry: {
              coordinates: [
                -122.058159,
                37.384708
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '129 Fair Oaks St, Mountain View, CA 94040',
              Price: '$1988000',
              Type: 'SINGLE_FAMILY',
              Size: '2015 sqft',
              '# bedrooms': 4,
              '# bathrooms': 5,
              Image: 'https://photos.zillowstatic.com/fp/923327df77096930dfbeeb38f81859f3-p_e.jpg',
              ZPID: '153166870'
            },
            geometry: {
              coordinates: [
                -122.098676,
                37.402405
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '1924 Silverwood Ave, Mountain View, CA 94043',
              Price: '$899000',
              Type: 'TOWNHOUSE',
              Size: '984 sqft',
              '# bedrooms': 2,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/bd410edada6b4a8b9f6ffdd70e9c5aff-p_e.jpg',
              ZPID: '19512281'
            },
            geometry: {
              coordinates: [
                -122.091434,
                37.401996
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '120 Sonoma Ter, Mountain View, CA 94043',
              Price: '$1549000',
              Type: 'TOWNHOUSE',
              Size: '1851 sqft',
              '# bedrooms': 3,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/c07f55bef9c8f121480ebca8228af8e3-p_e.jpg',
              ZPID: '2069787668'
            },
            geometry: {
              coordinates: [
                -122.061324,
                37.405839
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '501 Moorpark Way SPACE 15, Mountain View, CA 94041',
              Price: '$380000',
              Type: 'MANUFACTURED',
              Size: '1240 sqft',
              '# bedrooms': 3,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/13e706a9a1c10f481c648f7b6e997c06-p_e.jpg',
              ZPID: '153176558'
            },
            geometry: {
              coordinates: [
                -122.065774,
                37.381513
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '1142 Katie Ct, Mountain View, CA 94040',
              Price: '$2998000',
              Type: 'SINGLE_FAMILY',
              Size: '2402 sqft',
              '# bedrooms': 4,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/becb5fecbadb4c2c74e013b0d333e010-p_e.jpg',
              ZPID: '19532809'
            },
            geometry: {
              coordinates: [
                -122.07872,
                37.380729
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '1529 Tyler Park Way, Mountain View, CA 94040',
              Price: '$1525000',
              Type: 'CONDO',
              Size: '1702 sqft',
              '# bedrooms': 3,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/4d1dbd82c4fc83302cbda28fc24e62f9-p_e.jpg',
              ZPID: '19534341'
            },
            geometry: {
              coordinates: [
                -122.077518,
                37.375259
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '2040 W Middlefield Rd APT 11, Mountain View, CA 94043',
              Price: '$1088000',
              Type: 'CONDO',
              Size: '1431 sqft',
              '# bedrooms': 2,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/636744019051ff07802d7c6487bc8480-p_e.jpg',
              ZPID: '19512827'
            },
            geometry: {
              coordinates: [
                -122.092049,
                37.411827
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '680 Yosemite Ave, Mountain View, CA 94041',
              Price: '$3898000',
              Type: 'SINGLE_FAMILY',
              Size: '3119 sqft',
              '# bedrooms': 4,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/64e39cea3ecc14731089674734f831e9-p_e.jpg',
              ZPID: '19515126'
            },
            geometry: {
              coordinates: [
                -122.081699,
                37.386602
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '550 Ortega Ave APT A404, Mountain View, CA 94040',
              Price: '$1098000',
              Type: 'CONDO',
              Size: '1076 sqft',
              '# bedrooms': 2,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/7e9db2c4878e32fedd465c8b247e548e-p_e.jpg',
              ZPID: '19510480'
            },
            geometry: {
              coordinates: [
                -122.105784,
                37.399049
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '388 Circuit Way, Mountain View, CA 94043',
              Price: '$1698000',
              Type: 'TOWNHOUSE',
              Size: '1908 sqft',
              '# bedrooms': 4,
              '# bathrooms': 4,
              Image: 'https://photos.zillowstatic.com/fp/4c140d1c89bd9387f0013a6ca72128bf-p_e.jpg',
              ZPID: '304767427'
            },
            geometry: {
              coordinates: [
                -122.053619,
                37.39081
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '736 Emily Dr, Mountain View, CA 94043',
              Price: '$2350000',
              Type: 'SINGLE_FAMILY',
              Size: '1973 sqft',
              '# bedrooms': 4,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/8092937727e94e7eb7181238df6acd44-p_e.jpg',
              ZPID: '19516775'
            },
            geometry: {
              coordinates: [
                -122.066887,
                37.404199
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '191 E El Camino #121, Mountain View, CA 94040',
              Price: '$149000',
              Type: 'MANUFACTURED',
              Size: '1100 sqft',
              '# bedrooms': 2,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/242d44e1c13af876677598327b0ec49f-p_e.jpg',
              ZPID: '2079476748'
            },
            geometry: {
              coordinates: [
                null,
                null
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '186 Fair Oaks Ave, Mountain View, CA 94040',
              Price: '$999999',
              Type: 'SINGLE_FAMILY',
              Size: '600 sqft',
              '# bedrooms': 2,
              '# bathrooms': 1,
              Image: 'https://photos.zillowstatic.com/fp/1e8ba4df673619c086a32a68bb15e6ea-p_e.jpg',
              ZPID: '2069967489'
            },
            geometry: {
              coordinates: [
                -122.099455,
                37.401962
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '181 Del Medio Ave APT 302, Mountain View, CA 94040',
              Price: '$849999',
              Type: 'CONDO',
              Size: '1012 sqft',
              '# bedrooms': 2,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/ee6c5d9bd9d566cb7a0974e84a6adee5-p_e.jpg',
              ZPID: '19510335'
            },
            geometry: {
              coordinates: [
                -122.111846,
                37.40838
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '1075 Space Park Way SPACE 58, Mountain View, CA 94043',
              Price: '$249900',
              Type: 'MANUFACTURED',
              Size: '1060 sqft',
              '# bedrooms': 3,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/c17438b812d7ee51b3752de8fd8e4453-p_e.jpg',
              ZPID: '153148750'
            },
            geometry: {
              coordinates: [
                -122.07319,
                37.416421
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '650 Alamo Ct APT 9, Mountain View, CA 94043',
              Price: '$648888',
              Type: 'CONDO',
              Size: '796 sqft',
              '# bedrooms': 2,
              '# bathrooms': 1,
              Image: 'https://photos.zillowstatic.com/fp/14e201026bd13d7a50a3a816af800adb-p_e.jpg',
              ZPID: '19516841'
            },
            geometry: {
              coordinates: [
                -122.068629,
                37.402568
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '500 W Middlefield Rd APT 36, Mountain View, CA 94043',
              Price: '$858000',
              Type: 'CONDO',
              Size: '978 sqft',
              '# bedrooms': 2,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/350273dd2c87ce92984f1728109da45c-p_e.jpg',
              ZPID: '19516585'
            },
            geometry: {
              coordinates: [
                -122.071899,
                37.400494
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '764 Alice Ave, Mountain View, CA 94041',
              Price: '$1899999',
              Type: 'SINGLE_FAMILY',
              Size: '1841 sqft',
              '# bedrooms': 4,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/3c73b98922f510cad93a3ea32bedfbd6-p_e.jpg',
              ZPID: '19518802'
            },
            geometry: {
              coordinates: [
                -122.067079,
                37.381731
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '325 Sylvan Ave SPACE 5, Mountain View, CA 94041',
              Price: '$199900',
              Type: 'MANUFACTURED',
              Size: '1040 sqft',
              '# bedrooms': 2,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/964ab9b61662c0045c43791b78de4a38-p_e.jpg',
              ZPID: '153177242'
            },
            geometry: {
              coordinates: [
                -122.058684,
                37.384878
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '97 Fairchild Dr, Mountain View, CA 94043',
              Price: '$1499000',
              Type: 'CONDO',
              Size: '1674 sqft',
              '# bedrooms': 4,
              '# bathrooms': 4,
              Image: 'https://photos.zillowstatic.com/fp/4e5bc0440d7d007dd8421de917cab973-p_e.jpg',
              ZPID: '300480345'
            },
            geometry: {
              coordinates: [
                -122.062287,
                37.406265
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '301 Cherokee Loop, Mountain View, CA 94043',
              Price: '$2068000',
              Type: 'TOWNHOUSE',
              Size: '1990 sqft',
              '# bedrooms': 3,
              '# bathrooms': 4,
              Image: 'https://photos.zillowstatic.com/fp/eac01f287cd186446603833597f6564b-p_e.jpg',
              ZPID: '243211430'
            },
            geometry: {
              coordinates: [
                -122.092717,
                37.408024
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '915 W Dana St, Mountain View, CA 94041',
              Price: '$1879000',
              Type: 'TOWNHOUSE',
              Size: '1999 sqft',
              '# bedrooms': 2,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/c730f6a5f19dd26c59b76a2e7f107902-p_e.jpg',
              ZPID: '2069732649'
            },
            geometry: {
              coordinates: [
                -122.081221,
                37.392879
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '17 Moonbeam Dr, Mountain View, CA 94043',
              Price: '$1388000',
              Type: 'TOWNHOUSE',
              Size: '1402 sqft',
              '# bedrooms': 3,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/28f1e3c4e1f5231f2565a52c49df3e60-p_e.jpg',
              ZPID: '19513254'
            },
            geometry: {
              coordinates: [
                -122.076587,
                37.406536
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '1642 Spring St, Mountain View, CA 94043',
              Price: '$1698000',
              Type: 'SINGLE_FAMILY',
              Size: '1258 sqft',
              '# bedrooms': 3,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/bc8ad2c5c934c220c8b30cbe51e247f9-p_e.jpg',
              ZPID: '19513025'
            },
            geometry: {
              coordinates: [
                -122.082605,
                37.413404
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '725 Mariposa Ave APT 207, Mountain View, CA 94041',
              Price: '$950000',
              Type: 'CONDO',
              Size: '1048 sqft',
              '# bedrooms': 2,
              '# bathrooms': 2,
              Image: 'https://photos.zillowstatic.com/fp/05577dab5eb2e97e6fb87cfe58cae905-p_e.jpg',
              ZPID: '19514412'
            },
            geometry: {
              coordinates: [
                -122.091917,
                37.390523
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '378 Flynn Ave, Mountain View, CA 94043',
              Price: '$1998000',
              Type: 'SINGLE_FAMILY',
              Size: '1248 sqft',
              '# bedrooms': 3,
              '# bathrooms': 3,
              Image: 'https://photos.zillowstatic.com/fp/122844ac8618a063865e07e2f30a73ed-p_e.jpg',
              ZPID: '19517322'
            },
            geometry: {
              coordinates: [
                -122.059638,
                37.39842
              ],
              type: 'Point'
            }
          },
          {
            type: 'Feature',
            properties: {
              Address: '110 Minaret Ave, Mountain View, CA 94043',
              Price: '$1788000',
              Type: 'TOWNHOUSE',
              Size: '1893 sqft',
              '# bedrooms': 4,
              '# bathrooms': 4,
              Image: 'https://photos.zillowstatic.com/fp/3e20f008539c57a3dfd58183cb74a6f0-p_e.jpg',
              ZPID: '122247517'
            },
            geometry: {
              coordinates: [
                -122.065483,
                37.39176
              ],
              type: 'Point'
            }
          }
        ]
      }
    }
  },
  reducers: {
    propertyReducer: (state, action) => {
      state.properties = action.payload;
 
    },
  },
});

export const { propertyReducer } = prop.actions;

export default prop.reducer;

export const propState = (state) => state;
