import UniqueDB from '../UniqueDB';

let db = new UniqueDB();

describe('Test DB Functionality', () => {
    beforeAll(() => {
        db.set('Shai');
    });

   it('Should accept unique values', () => {
       expect.assertions(2);

       expect(db.set([]));

       expect(db.set('Moshe')).toBe(true);
   });

   it('Should throw on duplicate entity', () => {
       expect.assertions(1);

       expect(() => {
           db.set('Shai');
       }).toThrow();
   });
});