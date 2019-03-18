export class Asset {
  assetType: '';
  title: '';
  assetDetail = {
    vehicle: {
      contractId: '',
      reg: '',
      make: '',
      model: '',
      year: '',
      colour: '',
      status: '',
      meterOut: '',
      meterIn: '',
      driveZone: '',
      destination: '',
      actualPrice: ''
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
        zipcode: ''
      },
      area: '',
      status: '',
      actualPrice: ''
    },
    item: {
      contractId: '',
      title: '',
      make: '',
      model: '',
      year: '',
      version: '',
      discription: '',
      actualPrice: ''
    }
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
      zipcode: ''
    }
  };
}
