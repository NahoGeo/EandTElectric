import { Injectable } from '@angular/core';
import { Value } from '../models/motor-calculator.model';

@Injectable({
  providedIn: 'root'
})
export class MotorCalculatorService {

  private voltages: Value[] = [
    {
      id : "1",
      val : "200 (208)"
    },{
      id : "2",
      val : "230 (240)"
    },{
      id : "3",
      val : "460 (480)"
    },{
      id : "4",
      val : "575 (600)"
    }
  ]

  private threeHorses: Value[] = [
    {
      id : "1",
      val : "0.5 hp"
    },{
      id : "2",
      val : "0.75 hp"
    },{
      id : "3",
      val : "1 hp"
    },{
      id : "4",
      val : "1.5 hp"
    },{
      id : "5",
      val : "2 hp"
    },{
      id : "6",
      val : "3 hp"
    },{
      id : "7",
      val : "5 hp"
    },{
      id : "8",
      val : "7.5 hp"
    },{
      id : "9",
      val : "10 hp"
    },{
      id : "10",
      val : "15 hp"
    },{
      id : "11",
      val : "20 hp"
    },{
      id : "12",
      val : "25 hp"
    },{
      id : "13",
      val : "30 hp"
    },{
      id : "14",
      val : "40 hp"
    },{
      id : "15",
      val : "50 hp"
    },{
      id : "16",
      val : "60 hp"
    },{
      id : "17",
      val : "75 hp"
    },{
      id : "18",
      val : "100 hp"
    },{
      id : "19",
      val : "125 hp"
    },{
      id : "20",
      val : "150 hp"
    },{
      id : "21",
      val : "200 hp"
    }
  ]

  private singleHorses: Value[] = [
    {
      id : "1",
      val : "1/6 hp"
    },{
      id : "2",
      val : "1/4 hp"
    },{
      id : "3",
      val : "1/3 hp"
    },{
      id : "4",
      val : "1/2 hp"
    },{
      id : "5",
      val : "3/4 hp"
    },{
      id : "6",
      val : "1 hp"
    },{
      id : "7",
      val : "1.5 hp"
    },{
      id : "8",
      val : "2 hp"
    },{
      id : "9",
      val : "3 hp"
    },{
      id : "10",
      val : "5 hp"
    },{
      id : "11",
      val : "7.5 hp"
    },{
      id : "12",
      val : "10 hp"
    }
  ]

  private threeTableFields = [
    {
      combine: '200 (208)0.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '2.5'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '4'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.30'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '200 (208)0.75 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '3.7'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '6.25'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B4.85'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '200 (208)1 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '4.8'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '8'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B6.90'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '200 (208)1.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '6.9'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '10'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B10.2'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '200 (208)2 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '7.8'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '10'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SBG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B11.5'
        },
        {
          field: 'Nema Size Starter',
          val: '0'
        }
      ]
    },
    {
      combine: '200 (208)3 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '11'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '20'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36020'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '17.5'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SBG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B15.5'
        },
        {
          field: 'Nema Size Starter',
          val: '0'
        }
      ]
    },
    {
      combine: '200 (208)5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '17.5'
        },
        {
          field: 'Wire Size',
          val: '12'
        },
        {
          field: 'Circuit Breaker Size',
          val: '35'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36035'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '25'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SCG-3'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B28.0'
        },
        {
          field: 'Nema Size Starter',
          val: '1'
        }
      ]
    },
    {
      combine: '200 (208)7.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '25.3'
        },
        {
          field: 'Wire Size',
          val: '10'
        },
        {
          field: 'Circuit Breaker Size',
          val: '50'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36050'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H322N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '40'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SCG-3'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B45'
        },
        {
          field: 'Nema Size Starter',
          val: '1'
        }
      ]
    },
    {
      combine: '200 (208)10 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '32.2'
        },
        {
          field: 'Wire Size',
          val: '8'
        },
        {
          field: 'Circuit Breaker Size',
          val: '60'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36060'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H322N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '50'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SDG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B56'
        },
        {
          field: 'Nema Size Starter',
          val: '2'
        }
      ]
    },
    {
      combine: '200 (208)15 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '48.3'
        },
        {
          field: 'Wire Size',
          val: '6'
        },
        {
          field: 'Circuit Breaker Size',
          val: '90'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36090'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H322N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '60'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC74.6'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '200 (208)20 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '62.1'
        },
        {
          field: 'Wire Size',
          val: '4'
        },
        {
          field: 'Circuit Breaker Size',
          val: '100'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36100'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H323N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '90'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC94.0'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '200 (208)25 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '78.2'
        },
        {
          field: 'Wire Size',
          val: '3'
        },
        {
          field: 'Circuit Breaker Size',
          val: '110'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36110'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H323N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '100'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC143'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '200 (208)30 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '92'
        },
        {
          field: 'Wire Size',
          val: '2'
        },
        {
          field: 'Circuit Breaker Size',
          val: '125'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36125'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H324N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '125'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SFG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC143'
        },
        {
          field: 'Nema Size Starter',
          val: '4'
        }
      ]
    },
    {
      combine: '200 (208)40 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '120'
        },
        {
          field: 'Wire Size',
          val: '1/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '175'
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36175'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H324N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '175'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SFG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC180'
        },
        {
          field: 'Nema Size Starter',
          val: '4'
        }
      ]
    },
    {
      combine: '200 (208)50 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '150'
        },
        {
          field: 'Wire Size',
          val: '3/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '200',
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36200'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H324N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '200'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.70'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '200 (208)60 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '177'
        },
        {
          field: 'Wire Size',
          val: '4/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '250'
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36250'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H325'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '250'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B4.15'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '200 (208)75 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '221'
        },
        {
          field: 'Wire Size',
          val: '300'
        },
        {
          field: 'Circuit Breaker Size',
          val: '300'
        },
        {
          field: 'Breaker Cat No.',
          val: 'LAL36300'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H325'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '300'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B5.50'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '200 (208)100 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '285'
        },
        {
          field: 'Wire Size',
          val: '500'
        },
        {
          field: 'Circuit Breaker Size',
          val: '400'
        },
        {
          field: 'Breaker Cat No.',
          val: 'LAL36400'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H325'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '400'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SHG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B2.65'
        },
        {
          field: 'Nema Size Starter',
          val: '6'
        }
      ]
    },
    {
      combine: '200 (208)125 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '359'
        },
        {
          field: 'Wire Size',
          val: '2-4/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '600'
        },
        {
          field: 'Breaker Cat No.',
          val: 'MGL36600'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H326'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '500'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SHG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.30'
        },
        {
          field: 'Nema Size Starter',
          val: '6'
        }
      ]
    },
    {
      combine: '200 (208)150 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '414'
        },
        {
          field: 'Wire Size',
          val: '2-300'
        },
        {
          field: 'Circuit Breaker Size',
          val: '600'
        },
        {
          field: 'Breaker Cat No.',
          val: 'MGL36600'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H326'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '600'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SHG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B4.15'
        },
        {
          field: 'Nema Size Starter',
          val: '6'
        }
      ]
    },
    {
      combine: '200 (208)200 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '552'
        },
        {
          field: 'Wire Size',
          val: '2-500'
        },
        {
          field: 'Circuit Breaker Size',
          val: '800'
        },
        {
          field: 'Breaker Cat No.',
          val: 'MGL36800'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: '0'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '0'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SJG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: '0'
        },
        {
          field: 'Nema Size Starter',
          val: 'N/A'
        }
      ]
    },
    {
      combine: '230 (240)0.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '2.2'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '4'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.30'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '230 (240)0.75 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '3.2'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '5.6'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B4.15'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '230 (240)1 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '4.2'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '8'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B6.25'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '230 (240)1.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '6'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '10'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B9.10'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '230 (240)2 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '6.8'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '10'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SBG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B10.2'
        },
        {
          field: 'Nema Size Starter',
          val: '0'
        }
      ]
    },
    {
      combine: '230 (240)3 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '9.6'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '20'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36020'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '15'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SBG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B14.'
        },
        {
          field: 'Nema Size Starter',
          val: '0'
        }
      ]
    },
    {
      combine: '230 (240)5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '15.2'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '30'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36030'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '25'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SCG-3'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B25.'
        },
        {
          field: 'Nema Size Starter',
          val: '1'
        }
      ]
    },
    {
      combine: '230 (240)7.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '22'
        },
        {
          field: 'Wire Size',
          val: '10'
        },
        {
          field: 'Circuit Breaker Size',
          val: '45'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36045'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H321N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '30'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SCG-3'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B36.'
        },
        {
          field: 'Nema Size Starter',
          val: '1'
        }
      ]
    },
    {
      combine: '230 (240)10 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '28'
        },
        {
          field: 'Wire Size',
          val: '10'
        },
        {
          field: 'Circuit Breaker Size',
          val: '60'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36060'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H322N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '40'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SDG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B45.'
        },
        {
          field: 'Nema Size Starter',
          val: '2'
        }
      ]
    },
    {
      combine: '230 (240)15 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '42'
        },
        {
          field: 'Wire Size',
          val: '6'
        },
        {
          field: 'Circuit Breaker Size',
          val: '80'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36080'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H322N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '60'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SDG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B79.'
        },
        {
          field: 'Nema Size Starter',
          val: '2'
        }
      ]
    },
    {
      combine: '230 (240)20 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '54'
        },
        {
          field: 'Wire Size',
          val: '4'
        },
        {
          field: 'Circuit Breaker Size',
          val: '90'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36090'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H323N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '80'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC87.7'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '230 (240)25 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '68'
        },
        {
          field: 'Wire Size',
          val: '4'
        },
        {
          field: 'Circuit Breaker Size',
          val: '100'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36100'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H323N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '100'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC112'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '230 (240)30 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '80'
        },
        {
          field: 'Wire Size',
          val: '3'
        },
        {
          field: 'Circuit Breaker Size',
          val: '110'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36110'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H323N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '100'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC156.'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '230 (240)40 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '104'
        },
        {
          field: 'Wire Size',
          val: '1'
        },
        {
          field: 'Circuit Breaker Size',
          val: '150'
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36150'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H324N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '150'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SFG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC167.'
        },
        {
          field: 'Nema Size Starter',
          val: '4'
        }
      ]
    },
    {
      combine: '230 (240)50 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '130'
        },
        {
          field: 'Wire Size',
          val: '2/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '200',
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36200'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H324N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '200'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SFG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC208.'
        },
        {
          field: 'Nema Size Starter',
          val: '4'
        }
      ]
    },
    {
      combine: '230 (240)60 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '154'
        },
        {
          field: 'Wire Size',
          val: '3/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '225'
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36225'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H324N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '200'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.70'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '230 (240)75 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '192'
        },
        {
          field: 'Wire Size',
          val: '250'
        },
        {
          field: 'Circuit Breaker Size',
          val: '250'
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36250'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H325'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '300'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B4.15'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '230 (240)100 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '248'
        },
        {
          field: 'Wire Size',
          val: '350'
        },
        {
          field: 'Circuit Breaker Size',
          val: '350'
        },
        {
          field: 'Breaker Cat No.',
          val: 'LAL36350'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H325'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '350'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B6.25'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '230 (240)125 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '312'
        },
        {
          field: 'Wire Size',
          val: '2-3/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '450'
        },
        {
          field: 'Breaker Cat No.',
          val: 'MGL36450'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H325'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '400'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SHG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.0'
        },
        {
          field: 'Nema Size Starter',
          val: '6'
        }
      ]
    },
    {
      combine: '230 (240)150 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '360'
        },
        {
          field: 'Wire Size',
          val: '2-4/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '600'
        },
        {
          field: 'Breaker Cat No.',
          val: 'MGL36600'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H326'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '500'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SHG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.30'
        },
        {
          field: 'Nema Size Starter',
          val: '6'
        }
      ]
    },
    {
      combine: '230 (240)200 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '480'
        },
        {
          field: 'Wire Size',
          val: '2-350'
        },
        {
          field: 'Circuit Breaker Size',
          val: '800'
        },
        {
          field: 'Breaker Cat No.',
          val: 'MGL36800'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H326'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '600'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SHG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B4.85'
        },
        {
          field: 'Nema Size Starter',
          val: '6'
        }
      ]
    },
    {
      combine: '460 (480)0.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '1.1'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '2'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B1.45'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '460 (480)0.75 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '1.6'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '3.2'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B2.4'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '460 (480)1 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '2.1'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '4'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.00'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '460 (480)1.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '3.0'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '5.6'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B4.15'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '460 (480)2 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '3.4'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '6.25'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B4.85'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '460 (480)3 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '4.8'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '8'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SBG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B6.90'
        },
        {
          field: 'Nema Size Starter',
          val: '0'
        }
      ]
    },
    {
      combine: '460 (480)5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '7.6'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '15'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SBG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B11.5'
        },
        {
          field: 'Nema Size Starter',
          val: '0'
        }
      ]
    },
    {
      combine: '460 (480)7.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '11'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '20'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36020'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '20'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SCG-3'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B17.5'
        },
        {
          field: 'Nema Size Starter',
          val: '1'
        }
      ]
    },
    {
      combine: '460 (480)10 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '14'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '25'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36025'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '20'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SCG-3'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B45.'
        },
        {
          field: 'Nema Size Starter',
          val: '1'
        }
      ]
    },
    {
      combine: '460 (480)15 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '21'
        },
        {
          field: 'Wire Size',
          val: '10'
        },
        {
          field: 'Circuit Breaker Size',
          val: '40'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36040'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '30'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SDG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B32.'
        },
        {
          field: 'Nema Size Starter',
          val: '2'
        }
      ]
    },
    {
      combine: '460 (480)20 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '27'
        },
        {
          field: 'Wire Size',
          val: '10'
        },
        {
          field: 'Circuit Breaker Size',
          val: '60'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36060'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H362'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '40'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SDG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B45.'
        },
        {
          field: 'Nema Size Starter',
          val: '2'
        }
      ]
    },
    {
      combine: '460 (480)25 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '34'
        },
        {
          field: 'Wire Size',
          val: '8'
        },
        {
          field: 'Circuit Breaker Size',
          val: '70'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36070'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H362'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '50'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SDG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B62.'
        },
        {
          field: 'Nema Size Starter',
          val: '2'
        }
      ]
    },
    {
      combine: '460 (480)30 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '40'
        },
        {
          field: 'Wire Size',
          val: '8'
        },
        {
          field: 'Circuit Breaker Size',
          val: '80'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36080'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H362'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '60'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC59.4'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '460 (480)40 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '52'
        },
        {
          field: 'Wire Size',
          val: '6'
        },
        {
          field: 'Circuit Breaker Size',
          val: '90'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36090'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H363'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '80'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC81.5'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '460 (480)50 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '65'
        },
        {
          field: 'Wire Size',
          val: '4'
        },
        {
          field: 'Circuit Breaker Size',
          val: '100',
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36100'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H363'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '100'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC103.'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '460 (480)60 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '77'
        },
        {
          field: 'Wire Size',
          val: '3'
        },
        {
          field: 'Circuit Breaker Size',
          val: '110'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36110'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H363'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '100'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SFG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC112.'
        },
        {
          field: 'Nema Size Starter',
          val: '4'
        }
      ]
    },
    {
      combine: '460 (480)75 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '96'
        },
        {
          field: 'Wire Size',
          val: '1'
        },
        {
          field: 'Circuit Breaker Size',
          val: '125'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36125'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H364'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '150'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SFG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC156.'
        },
        {
          field: 'Nema Size Starter',
          val: '4'
        }
      ]
    },
    {
      combine: '460 (480)100 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '124'
        },
        {
          field: 'Wire Size',
          val: '2/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '200'
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36200'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H364'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '175'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SFG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC196.'
        },
        {
          field: 'Nema Size Starter',
          val: '4'
        }
      ]
    },
    {
      combine: '460 (480)125 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '156'
        },
        {
          field: 'Wire Size',
          val: '3/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '225'
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36225'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H364'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '200'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.70'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '460 (480)150 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '180'
        },
        {
          field: 'Wire Size',
          val: '4/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '250'
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36250'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H365'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '250'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B4.15'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '460 (480)200 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '240'
        },
        {
          field: 'Wire Size',
          val: '350'
        },
        {
          field: 'Circuit Breaker Size',
          val: '350'
        },
        {
          field: 'Breaker Cat No.',
          val: 'LAL36350'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H365'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '350'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B6.25'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '575 (600)0.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '0.9'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '1.8'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B1.30'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '575 (600)0.75 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '1.3'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '2.5'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B1.88'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '575 (600)1 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '1.7'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '3.2'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B2.40'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '575 (600)1.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '2.4'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '4'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.30'
        },
        {
          field: 'Nema Size Starter',
          val: '00'
        }
      ]
    },
    {
      combine: '575 (600)2 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '2.7'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '5'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SAG-12'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.70'
        },
        {
          field: 'Nema Size Starter',
          val: '0'
        }
      ]
    },
    {
      combine: '575 (600)3 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '3.9'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '6.25'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SBG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B4.85'
        },
        {
          field: 'Nema Size Starter',
          val: '0'
        }
      ]
    },
    {
      combine: '575 (600)5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '6.1'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '10'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SBG-2'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B9.10'
        },
        {
          field: 'Nema Size Starter',
          val: '1'
        }
      ]
    },
    {
      combine: '575 (600)7.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '9.0'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '15'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36015'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '15'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SCG-3'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B12.8'
        },
        {
          field: 'Nema Size Starter',
          val: '1'
        }
      ]
    },
    {
      combine: '575 (600)10 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '11'
        },
        {
          field: 'Wire Size',
          val: '14'
        },
        {
          field: 'Circuit Breaker Size',
          val: '20'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36020'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '20'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SCG-3'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B17.5'
        },
        {
          field: 'Nema Size Starter',
          val: '2'
        }
      ]
    },
    {
      combine: '575 (600)15 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '17'
        },
        {
          field: 'Wire Size',
          val: '12'
        },
        {
          field: 'Circuit Breaker Size',
          val: '35'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36035'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '25'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SDG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B25.'
        },
        {
          field: 'Nema Size Starter',
          val: '2'
        }
      ]
    },
    {
      combine: '575 (600)20 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '22'
        },
        {
          field: 'Wire Size',
          val: '10'
        },
        {
          field: 'Circuit Breaker Size',
          val: '45'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36045'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H361'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '30'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SDG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B36.'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '575 (600)25 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '27'
        },
        {
          field: 'Wire Size',
          val: '10'
        },
        {
          field: 'Circuit Breaker Size',
          val: '60'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36060'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H362'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '40'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SDG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B45.'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '575 (600)30 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '32'
        },
        {
          field: 'Wire Size',
          val: '8'
        },
        {
          field: 'Circuit Breaker Size',
          val: '60'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36060'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H362'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '50'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC46.6'
        },
        {
          field: 'Nema Size Starter',
          val: '3'
        }
      ]
    },
    {
      combine: '575 (600)40 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '41'
        },
        {
          field: 'Wire Size',
          val: '6'
        },
        {
          field: 'Circuit Breaker Size',
          val: '80'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36080'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H362'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '60'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC64.3'
        },
        {
          field: 'Nema Size Starter',
          val: '4'
        }
      ]
    },
    {
      combine: '575 (600)50 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '52'
        },
        {
          field: 'Wire Size',
          val: '6'
        },
        {
          field: 'Circuit Breaker Size',
          val: '90',
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36090'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H363'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '80'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SEG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC81.5'
        },
        {
          field: 'Nema Size Starter',
          val: '4'
        }
      ]
    },
    {
      combine: '575 (600)60 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '62'
        },
        {
          field: 'Wire Size',
          val: '4'
        },
        {
          field: 'Circuit Breaker Size',
          val: '100'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36100'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H363'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '90'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SFG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC87.7'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '575 (600)75 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '77'
        },
        {
          field: 'Wire Size',
          val: '3'
        },
        {
          field: 'Circuit Breaker Size',
          val: '110'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36110'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H363'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '100'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SFG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC112.'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '575 (600)100 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '99'
        },
        {
          field: 'Wire Size',
          val: '1'
        },
        {
          field: 'Circuit Breaker Size',
          val: '150'
        },
        {
          field: 'Breaker Cat No.',
          val: 'HDL36150'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H364'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '150'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SFG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'CC156.'
        },
        {
          field: 'Nema Size Starter',
          val: '5'
        }
      ]
    },
    {
      combine: '575 (600)125 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '125'
        },
        {
          field: 'Wire Size',
          val: '2/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '200'
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36200'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H364'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '175'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.00'
        },
        {
          field: 'Nema Size Starter',
          val: '6'
        }
      ]
    },
    {
      combine: '575 (600)150 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '144'
        },
        {
          field: 'Wire Size',
          val: '3/0'
        },
        {
          field: 'Circuit Breaker Size',
          val: '200'
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36200'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H364'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '200'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B3.70'
        },
        {
          field: 'Nema Size Starter',
          val: '6'
        }
      ]
    },
    {
      combine: '575 (600)200 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          val: '192'
        },
        {
          field: 'Wire Size',
          val: '250'
        },
        {
          field: 'Circuit Breaker Size',
          val: '250'
        },
        {
          field: 'Breaker Cat No.',
          val: 'JDL36250'
        },
        {
          field: 'HD Switch, Nema 1 Enclosed',
          val: 'H365'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          val: '300'
        },
        {
          field: 'NEMA Starter Catalog Number',
          val: 'SGG-1'
        },
        {
          field: 'Melting Alloy Thermal Unit',
          val: 'B4.15'
        },
        {
          field: 'Nema Size Starter',
          val: '6'
        }
      ]
    }
  ]

  private singleTableFields=[
    {
      value: '1/6 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          v115: '4.4',
          v230: '2.2'
        },
        {
          field: 'Wire Size',
          v115: '14',
          v230: '14'
        },
        {
          field: 'Circuit Breaker Size',
          v115: '15',
          v230: '15'
        },
        {
          field: 'Breaker Cat No.',
          v115: 'HDL26015',
          v230: 'HDL26015'
        },
        {
          field: 'HD Switch NEMA 1 Enclosed',
          v115: 'H221N',
          v230: 'H221N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          v115: '6.25',
          v230: '3.2'
        },
        {
          field: 'Fractional HP N1 Starter Class 2510',
          v115: 'FG-2',
          v230: 'FG-2'
        },
        {
          field: 'Thermal Unit',
          v115: 'A4.32',
          v230: 'A1.86'
        },
        {
          field: 'Integral Starter N1 Enc 2510',
          v115: 'MBG-1',
          v230: 'MBG-1'
        },
        {
          field: 'One Melting Alloy Thermal Unit',
          v115: 'B4.15',
          v230: 'B2.10'
        },
        {
          field: 'NEMA Enclosed Starter Class 8536',
          v115: 'SAG-11',
          v230: 'SAG-11'
        },
        {
          field: 'Thermal Unit',
          v115: 'B4.85',
          v230: 'B2.40'
        }
      ]
    },
    {
      value: '1/4 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          v115: '5.8',
          v230: '2.9'
        },
        {
          field: 'Wire Size',
          v115: '14',
          v230: '14'
        },
        {
          field: 'Circuit Breaker Size',
          v115: '15',
          v230: '15'
        },
        {
          field: 'Breaker Cat No.',
          v115: 'HDL26015',
          v230: 'HDL26015'
        },
        {
          field: 'HD Switch NEMA 1 Enclosed',
          v115: 'H221N',
          v230: 'H221N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          v115: '9',
          v230: '4.5'
        },
        {
          field: 'Fractional HP N1 Starter Class 2510',
          v115: 'FG-2',
          v230: 'FG-2'
        },
        {
          field: 'Thermal Unit',
          v115: 'A6.20',
          v230: 'A2.57'
        },
        {
          field: 'Integral Starter N1 Enc 2510',
          v115: 'MBG-1',
          v230: 'MBG-1'
        },
        {
          field: 'One Melting Alloy Thermal Unit',
          v115: 'B6.25',
          v230: 'B3.00'
        },
        {
          field: 'NEMA Enclosed Starter Class 8536',
          v115: 'SAG-11',
          v230: 'SAG-11'
        },
        {
          field: 'Thermal Unit',
          v115: 'B6.25',
          v230: 'B3.30'
        }
      ]
    },
    {
      value: '1/3 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          v115: '7.2',
          v230: '3.6'
        },
        {
          field: 'Wire Size',
          v115: '14',
          v230: '14'
        },
        {
          field: 'Circuit Breaker Size',
          v115: '15',
          v230: '15'
        },
        {
          field: 'Breaker Cat No.',
          v115: 'HDL26015',
          v230: 'HDL26015'
        },
        {
          field: 'HD Switch NEMA 1 Enclosed',
          v115: 'H221N',
          v230: 'H221N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          v115: '10',
          v230: '5.6'
        },
        {
          field: 'Fractional HP N1 Starter Class 2510',
          v115: 'FG-2',
          v230: 'FG-2'
        },
        {
          field: 'Thermal Unit',
          v115: 'A7.65',
          v230: 'A2.81'
        },
        {
          field: 'Integral Starter N1 Enc 2510',
          v115: 'MBG-1',
          v230: 'MBG-1'
        },
        {
          field: 'One Melting Alloy Thermal Unit',
          v115: 'B7.70',
          v230: 'B3.70'
        },
        {
          field: 'NEMA Enclosed Starter Class 8536',
          v115: 'SAG-11',
          v230: 'SAG-11'
        },
        {
          field: 'Thermal Unit',
          v115: 'B8.20',
          v230: 'B4.15'
        }
      ]
    },
    {
      value: '1/2 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          v115: '9.8',
          v230: '4.9'
        },
        {
          field: 'Wire Size',
          v115: '14',
          v230: '14'
        },
        {
          field: 'Circuit Breaker Size',
          v115: '20',
          v230: '15'
        },
        {
          field: 'Breaker Cat No.',
          v115: 'HDL26020',
          v230: 'HDL26015'
        },
        {
          field: 'HD Switch NEMA 1 Enclosed',
          v115: 'H221N',
          v230: 'H221N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          v115: '15',
          v230: '7'
        },
        {
          field: 'Fractional HP N1 Starter Class 2510',
          v115: 'FG-2',
          v230: 'FG-2'
        },
        {
          field: 'Thermal Unit',
          v115: 'A9.85',
          v230: 'A5.30'
        },
        {
          field: 'Integral Starter N1 Enc 2510',
          v115: 'MBG-1',
          v230: 'MBG-1'
        },
        {
          field: 'One Melting Alloy Thermal Unit',
          v115: 'B10.2',
          v230: 'B4.85'
        },
        {
          field: 'NEMA Enclosed Starter Class 8536',
          v115: 'SBG-1',
          v230: 'SAG-11'
        },
        {
          field: 'Thermal Unit',
          v115: 'B11.5',
          v230: 'B5.50'
        }
      ]
    },
    {
      value: '3/4 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          v115: '13.8',
          v230: '6.9'
        },
        {
          field: 'Wire Size',
          v115: '14',
          v230: '14'
        },
        {
          field: 'Circuit Breaker Size',
          v115: '25',
          v230: '15'
        },
        {
          field: 'Breaker Cat No.',
          v115: 'HDL26025',
          v230: 'HDL26015'
        },
        {
          field: 'HD Switch NEMA 1 Enclosed',
          v115: 'H221N',
          v230: 'H221N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          v115: '20',
          v230: '10'
        },
        {
          field: 'Fractional HP N1 Starter Class 2510',
          v115: 'FG-2',
          v230: 'FG-2'
        },
        {
          field: 'Thermal Unit',
          v115: 'A14.8',
          v230: 'A6.99'
        },
        {
          field: 'Integral Starter N1 Enc 2510',
          v115: 'MBG-1',
          v230: 'MBG-1'
        },
        {
          field: 'One Melting Alloy Thermal Unit',
          v115: 'B14.0',
          v230: 'B6.90'
        },
        {
          field: 'NEMA Enclosed Starter Class 8536',
          v115: 'SBG-1',
          v230: 'SAG-11'
        },
        {
          field: 'Thermal Unit',
          v115: 'B15.5',
          v230: 'B7.70'
        }
      ]
    },
    {
      value: '1 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          v115: '16',
          v230: '8'
        },
        {
          field: 'Wire Size',
          v115: '14',
          v230: '14'
        },
        {
          field: 'Circuit Breaker Size',
          v115: '30',
          v230: '15'
        },
        {
          field: 'Breaker Cat No.',
          v115: 'HDL26030',
          v230: 'HDL26015'
        },
        {
          field: 'HD Switch NEMA 1 Enclosed',
          v115: 'H221N',
          v230: 'H221N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          v115: '25',
          v230: '12'
        },
        {
          field: 'Fractional HP N1 Starter Class 2510',
          v115: 'FG-2',
          v230: 'FG-2'
        },
        {
          field: 'Thermal Unit',
          v115: 'A17.9',
          v230: 'A8.38'
        },
        {
          field: 'Integral Starter N1 Enc 2510',
          v115: 'MBG-1',
          v230: 'MBG-1'
        },
        {
          field: 'One Melting Alloy Thermal Unit',
          v115: 'B17.5',
          v230: 'B8.20'
        },
        {
          field: 'NEMA Enclosed Starter Class 8536',
          v115: 'SBG-1',
          v230: 'SAG-11'
        },
        {
          field: 'Thermal Unit',
          v115: 'B19.5',
          v230: 'B9.10'
        }
      ]
    },
    {
      value: '1.5 hp',
      results: [
        {
          field: 'Full Load Amps (FLA)',
          v115: '20',
          v230: '10'
        },
        {
          field: 'Wire Size',
          v115: '12',
          v230: '14'
        },
        {
          field: 'Circuit Breaker Size',
          v115: '40',
          v230: '20'
        },
        {
          field: 'Breaker Cat No.',
          v115: 'HDL26040',
          v230: 'HDL26020'
        },
        {
          field: 'HD Switch NEMA 1 Enclosed',
          v115: 'H221N',
          v230: 'H221N'
        },
        {
          field: 'Dual Elem Time Delay Fuse Amps',
          v115: '30',
          v230: '15'
        },
        {
          field: 'Fractional HP N1 Starter Class 2510',
          v115: '-',
          v230: '-'
        },
        {
          field: 'Thermal Unit',
          v115: '-',
          v230: '-'
        },
        {
          field: 'Integral Starter N1 Enc 2510',
          v115: 'MCG-1',
          v230: 'MBG-1'
        },
        {
          field: 'One Melting Alloy Thermal Unit',
          v115: 'B25.0',
          v230: 'B12.80'
        },
        {
          field: 'NEMA Enclosed Starter Class 8536',
          v115: 'SCG-1',
          v230: 'SBG-1'
        },
        {
          field: 'Thermal Unit',
          v115: 'B28.0',
          v230: 'B14.0'
        }
      ]
    },
  ]

  constructor() { }

  getSingleTableFields() {
    return[...this.singleTableFields]
  }

  getVoltages() {
    return [...this.voltages]
  }

  getThreeHorses() {
    return [...this.threeHorses]
  }

  getsingleHorses() {
    return [...this.singleHorses]
  }

  getThreePhaseValues(combine: string) {
    let values = []
    for (let i = 0; i < this.threeTableFields.length; i++) {
      if (this.threeTableFields[i].combine === combine) {
        values = this.threeTableFields[i].results
      }
    }
    return values
  }
}
