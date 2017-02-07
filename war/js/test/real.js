describe("A suite", function() 
{
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("and has a positive case", function() {
	    expect(true).toBe(true);
	  });
});
describe("B suite", function(){
	  it("contains spec with an expectation",function()  {
	    expect(true).toBe(true);
	  });
	  it("and has a positive case", function() {
		    expect(a()).toBe(true);
	  });
	  it("Test to be false", function() {
		    expect(c()).toBe(true);
	  });
});