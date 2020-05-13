import { Injectable } from '@angular/core';
import { WireType } from '../models/wire-and-conduit.model';

@Injectable({
  providedIn: 'root'
})
export class WireAndConduitService {

  private wireSizes: Array<WireType> = [
    {
      value : "#14",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '20',
            val2: {
                val1: '1/2',
                val2: '1/2',
              },
            val3: '1/2',
            val4: '1/2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: 'N/A',
            val2: {
                val1: 'N/A',
                val2: 'N/A',
              },
            val3: 'N/A',
            val4: 'N/A'
          }
        }
      ]
    },
    {
      value : "#12",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '25',
            val2: {
                val1: '1/2',
                val2: '1/2',
              },
            val3: '1/2',
            val4: '1/2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: 'N/A',
            val2: {
                val1: 'N/A',
                val2: 'N/A',
              },
            val3: 'N/A',
            val4: 'N/A'
          }
        }
      ]
    },
    {
      value : "#10",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '35',
            val2: {
                val1: '1/2',
                val2: '3/4',
              },
            val3: '1/2',
            val4: '1/2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: 'N/A',
            val2: {
                val1: 'N/A',
                val2: 'N/A',
              },
            val3: 'N/A',
            val4: 'N/A'
          }
        }
      ]
    },
    {
      value : "#8",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '50',
            val2: {
                val1: '3/4',
                val2: '3/4',
              },
            val3: '1/2',
            val4: '3/4'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '40',
            val2: {
                val1: '3/4',
                val2: '3/4',
              },
            val3: '1/2',
            val4: '3/4'
          }
        }
      ]
    },
    {
      value : "#6",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '65',
            val2: {
                val1: '3/4',
                val2: '1',
              },
            val3: '3/4',
            val4: '3/4'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '50',
            val2: {
                val1: '3/4',
                val2: '1',
              },
            val3: '3/4',
            val4: '3/4'
          }
        }
      ]
    },
    {
      value : "#4",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '85',
            val2: {
                val1: '1',
                val2: '1 1/4',
              },
            val3: '1',
            val4: '1'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '65',
            val2: {
                val1: '1',
                val2: '1',
              },
            val3: '3/4',
            val4: '1'
          }
        }
      ]
    },
    {
      value : "#3",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '100',
            val2: {
                val1: '1',
                val2: '1 1/4',
              },
            val3: '1',
            val4: '1 1/4'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '75',
            val2: {
                val1: 'N/A',
                val2: 'N/A',
              },
            val3: 'N/A',
            val4: 'N/A'
          }
        }
      ]
    },
    {
      value : "#2",
      fields : [
          {
          wireType: 'COOPER',
          results: {
            val1: '115',
            val2: {
                val1: '1 1/4',
                val2: '1 1/4',
              },
            val3: '1',
            val4: '1 1/4'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '90',
            val2: {
                val1: '1',
                val2: '1 1/4',
              },
            val3: '1',
            val4: '1 1/4'
          }
        }
      ]
    },
    {
      value : "#1",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '130',
            val2: {
                val1: '1 1/4',
                val2: '1 1/2',
              },
            val3: '1 1/4',
            val4: '1 1/4'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '100',
            val2: {
                val1: '1 1/4',
                val2: '1 1/2',
              },
            val3: '1 1/4',
            val4: '1 1/4'
          }
        }
      ]
    },
    {
      value : "1/0",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '150',
            val2: {
                val1: '1 1/2',
                val2: '2',
              },
            val3: '1 1/4',
            val4: '1 1/2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '120',
            val2: {
                val1: '1 1/4',
                val2: '1 1/2',
              },
            val3: '1 1/4',
            val4: '1 1/2'
          }
        }
      ]
    },
    {
      value : "2/0",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '175',
            val2: {
                val1: '1 1/2',
                val2: '2',
              },
            val3: '1 1/2',
            val4: '2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '135',
            val2: {
                val1: '1 1/2',
                val2: '2',
              },
            val3: '1 1/4',
            val4: '1 1/2'
          }
        }
      ]
    },
    {
      value : "3/0",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '200',
            val2: {
                val1: '2',
                val2: '2',
              },
            val3: '1 1/2',
            val4: '2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '155',
            val2: {
                val1: '1 1/2',
                val2: '2',
              },
            val3: '1 1/2',
            val4: '2'
          }
        }
      ]
    },
    {
      value : "4/0",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '230',
            val2: {
                val1: '2',
                val2: '2 1/2',
              },
            val3: '2',
            val4: '2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '180',
            val2: {
                val1: '2',
                val2: '2',
              },
            val3: '1 1/2',
            val4: '2'
          }
        }
      ]
    },
    {
      value : "250",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '255',
            val2: {
                val1: '2',
                val2: '2 1/2',
              },
            val3: '2',
            val4: '2 1/2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '205',
            val2: {
                val1: '2',
                val2: '2 1/2',
              },
            val3: '2',
            val4: '2'
          }
        }
      ]
    },
    {
      value : "300",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '285',
            val2: {
                val1: '2 1/2',
                val2: '2 1/2',
              },
            val3: '2',
            val4: '2 1/2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '230',
            val2: {
                val1: '2',
                val2: '2 1/2',
              },
            val3: '2',
            val4: '2 1/2'
          }
        }
      ]
    },
    {
      value : "350",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '310',
            val2: {
                val1: '2 1/2',
                val2: '2 1/2',
              },
            val3: '2 1/2',
            val4: '2 1/2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '250',
            val2: {
                val1: '2 1/2',
                val2: '2 1/2',
              },
            val3: '2',
            val4: '2 1/2'
          }
        }
      ]
    },
    {
      value : "400",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '335',
            val2: {
                val1: '2 1/2',
                val2: '3',
              },
            val3: '2 1/2',
            val4: '2 1/2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '270',
            val2: {
                val1: '2 1/2',
                val2: '2 1/2',
              },
            val3: '2 1/2',
            val4: '2 1/2'
          }
        }
      ]
    },
    {
      value : "500",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '380',
            val2: {
                val1: '2 1/2',
                val2: '3',
              },
            val3: '2 1/2',
            val4: '3'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '310',
            val2: {
                val1: '2 1/2',
                val2: '3',
              },
            val3: '2 1/2',
            val4: '2 1/2'
          }
        }
      ]
    },
    {
      value : "600",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '420',
            val2: {
                val1: '3',
                val2: '3 1/2',
              },
            val3: '3',
            val4: '3'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '340',
            val2: {
                val1: '3',
                val2: '3',
              },
            val3: '2 1/2',
            val4: '3'
          }
        }
      ]
    },
    {
      value : "700",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '460',
            val2: {
                val1: '3',
                val2: '3 1/2',
              },
            val3: '3',
            val4: '3 1/2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '375',
            val2: {
                val1: '3',
                val2: '3 1/2',
              },
            val3: '3',
            val4: '3'
          }
        }
      ]
    },
    {
      value : "750",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '475',
            val2: {
                val1: '3',
                val2: '3 1/2',
              },
            val3: '3',
            val4: '3 1/2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '385',
            val2: {
                val1: '3',
                val2: '3 1/2',
              },
            val3: '3',
            val4: '3'
          }
        }
      ]
    },
    {
      value : "800",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '490',
            val2: {
                val1: '3',
                val2: '4',
              },
            val3: '3',
            val4: '3 1/2'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: 'N/A',
            val2: {
                val1: 'N/A',
                val2: 'N/A',
              },
            val3: 'N/A',
            val4: 'N/A'
          }
        }
      ]
    },
    {
      value : "900",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '520',
            val2: {
                val1: '3 1/2',
                val2: '4',
              },
            val3: '3',
            val4: '4'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: 'N/A',
            val2: {
                val1: 'N/A',
                val2: 'N/A',
              },
            val3: 'N/A',
            val4: 'N/A'
          }
        }
      ]
    },
    {
      value : "1000",
      fields : [
        {
          wireType: 'COOPER',
          results: {
            val1: '545',
            val2: {
                val1: '3 1/2',
                val2: '4',
              },
            val3: '3 1/2',
            val4: '4'
          }
        },
        {
          wireType: 'ALUMINIUM',
          results: {
            val1: '445',
            val2: {
                val1: '3 1/2',
                val2: '4',
              },
            val3: '3',
            val4: '4'
          }
        }
      ]
    }  
  ]

  notes = [
    'Ampacity of conductors based on 30 C ambient.',
    'Conduit sizes for aluminum based on the use of compact conductors, where a major portion of the load consists of nonlinear loads, the neutral is considered to be current carrying.',
    'On 4-wire applications, derate the ampacity to 80% per note 8 and note 10© of the NEC ampacity tables.'
  ]

  constructor() { }

  getWireSizes() {
    return [...this.wireSizes]
  }

  getNotes() {
    return [...this.notes]
  }

  getResults(size: any) {
    let fields
    this.wireSizes.forEach(result => {
      if(result.value === size && result.fields){
        fields = result.fields
      }
    })
    return fields
  }
}
