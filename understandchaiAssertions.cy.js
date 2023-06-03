/// <reference types="cypress" />

// The first two, that is expect and should, are BDD styles, and assert is a TDD style assertion library
// BDD, also known as behavior-driven development language, provides an expressive language and readable style, 
// whereas TDD also known as test-driven development, provides more of a classical feel.

describe('Example Test', () => 
{
    it('should assert something using Chai', () => 
    {
        const value = 42;
        const arr = [1, 2, 3];
        const Employee = 
        { 
            name: 'Daniel', 
            age: 25, 
            Rank: 'Griffin' 
        }

        // Chai Assertions for Numeric Values

        // Using Expect
        expect(value).to.be.a('number')
        expect(value).to.equal(42, 'Value isn\'t equal to 42')
        expect(value).to.be.above(30, 'Value isn\'t above 30')
        expect(value).to.be.below(50, 'Value isn\'t below 50')
        // Using Should
        value.should.be.a('number')
        value.should.equal(42, 'Value isn\'t equal to 42')
        value.should.be.above(30, 'Value isn\'t above 30')
        value.should.be.below(50, 'Value isn\'t below 50')
        // Using Assert
        assert.isNumber(value);
        assert.equal(value, 42, 'Value isn\'t equal to 42')
        assert.isAbove(value, 30, 'Value isn\'t above 30')
        assert.isBelow(value, 50, 'Value isn\'t below 50')

        // Chai Assertions for an Array

        // Using Expect
        expect(arr).to.be.an('array').that.includes(2, 'arr isn\'t an array and doesn\'t include 2')
        expect(arr).to.have.lengthOf(3, 'Array length isn\'t 3')
        expect(arr).to.deep.equal([1, 2, 3], 'Array doesn\'t deeply equal [1,2,3]')
        // Using Should
        arr.should.be.an('array').that.includes(2, 'arr isn\'t an array and doesn\'t include 2')
        arr.should.have.lengthOf(3, 'Array length isn\'t 3')
        arr.should.deep.equal([1, 2, 3], 'Array doesn\'t deeply equal [1,2,3]')
        // Using Assert
        assert.isArray(arr, 'arr isn\'t an array')
        assert.include(arr, 2, 'array doesn\'t include 2')
        assert.lengthOf(arr, 3, 'Array length isn\'t 3')
        assert.deepEqual(arr, [1, 2, 3], 'Array doesn\'t deeply equal [1,2,3]')

        // Chai Assertions for an Object

        // Using Expect
        expect(Employee).to.be.an('object').that.has.property
        (
            'name', 'Daniel' , 
            'Exployee isn\'t an Object and don\'t have name: Daniel'
        )
        expect(Employee).to.have.property('age').that.is.a('number').and.equals
        (
            25, 
            'Employee don\'t have age property and it\'s not a number and also not equals to 25'
        )
        // Using Should
        Employee.should.be.an('object').and.have.property
        (
            'name', 
            'Daniel', 
            'Employee is not an object or does not have the expected name'
        )
        Employee.should.have.property('age').which.is.a('number').and.equal
        (
            25, 
            'Employee does not have the age property or it is not a number or not equal to 25'
        )
        // Using Assert 
        assert.isObject(Employee, 'Employee is not an object')
        assert.propertyVal(Employee, 'name', 'Daniel', 'Employee does not have the expected name')
        assert.property(Employee, 'age', 'Employee does not have the age property')
        assert.isNumber(Employee.age, 'Employee age is not a number')
        assert.strictEqual(Employee.age, 25, 'Employee age is not equal to 25')
    })
})
