export class Asset {

 ref: '';
 title: '';
 assetType: '';
assetDetail = {
     vehicle : {
       contractId: '',
        reg: '',
        make: '',
        model: '',
        year: '',
        colour: '',
        status:  '',
        meterOut: '',
        meterIn: '',
        driveZone: '',
        destination: '',
        actualPrice: '',
    },
     house: {
      contractId: '',
          address: {
          floor: '',
          number: '',
          street: '',
          sector: '',
          city: '',
          province: '',
          zipcode: '',
          },
          area: '',
          status: '',
          actualPrice: '',
        },
     item: {
      contractId: '',
        title: '',
        make: '',
        model: '',
        year: '',
        version: '',
        discription: '',
        actualPrice: '',
      },
    };
owner = {
     name: '',
     fatherName: '',
     cnic: '',
     mobile1: '',
     mobile2: '',
     address: {
      floor: '',
      number: '',
      street: '',
      sector: '',
      city: '',
      province: '',
      zipcode: '',
     },
    };
contract = {
      issuetime: '',
      duration: '',
      increment: '',
      incrementSchedule: '',
      status: '',
      assetValue: '',
        contractDate: '',
        startDate: '',
        expiryDate: '',
        cancelation: '',
        reaccurance: '',
        paymentMathod: '',
        priceQuoted: '',
        totalPayable: '',
        downPayment: '',
        avdancePayment: '',
        };
customer = {
        ref: '',
        name: '',
        fatherName: '',
        address: {
          floor: '',
          number: '',
          street: '',
          sector: '',
          city: '',
          province: '',
          zipcode: '',
         },
          cnic: '',
          license: '',
          mobile1: '',
          mobile2: '',
          guarantor: {
            name: '',
            mobile: '',
            father: '',
            cnic: '',
            address: {
              floor: '',
              number: '',
              street: '',
              sector: '',
              city: '',
              province: '',
              zipcode: '',
             },
          },
       };
   }
