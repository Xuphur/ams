export class Customer {

ref: string;
name: string;
fatherName: string;
address: {
  floor: string;
  number: string;
  street: string;
  sector: string;
  city: string;
  province: string;
  zipcode: string;
 };
  cnic: string;
  license: string;
  mobile1: string;
  mobile2: string;
  guarentor: {
    name: string;
    mobile: string;
    father: string;
    cnic: string;
    address: {
      floor: string;
      number: string;
      street: string;
      sector: string;
      city: string;
      province: string;
      zipcode: string;
     };
  };

 price: {
   mathod: string;
   quoted: string;
   total: string;
   downPayment: string;
   avdancePayment: string;
   reciept: [{
   number: string;
   date: string;
   ammount: string;
   }];
  };

  contract: {
   issuetime: string;
   duration: string;
   increment: string;
   incrementSchedule: string;
   status: string;
   assetValue: string;
   contractDate: string;
    startDate: string;
    expiryDate: string;
    cancelationDate: string;
    };
  }
