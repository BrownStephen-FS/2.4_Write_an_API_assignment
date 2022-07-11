const { dataUSAService, dataUSAServiceByYear } = require("./dataUSAService");

jest.mock("./dataUSAService");

describe("Data USA Service Tests", () => {
  test("Testing the third object in the data array ", async () => {
    const res = await dataUSAService();
    //Testing that all objects have the same values for these fields
    for (let i = 0; i < res.data.data.length; i++) {
      expect(res.data.data[i]["ID Nation"]).toEqual("01000US");
      expect(res.data.data[i].Nation).toEqual("United States");
      expect(res.data.data[i]["Slug Nation"]).toEqual("united-states");
    }
    //Fouth object testing only
    expect(res.data.data).toHaveLength(7);
    expect(res.data.data[3]["ID Year"]).toEqual(2016);
    expect(res.data.data[3].Year).toEqual("2016");
    expect(res.data.data[3].Population).toEqual(323127515);
  });

  test("Match content for year 2017", async () => {
    const res = await dataUSAServiceByYear(2017);
    expect(res.data.data).toHaveLength(1);
    expect(res.data.data[0]["ID Year"]).toEqual(2017);
    expect(res.data.data[0].Year).toEqual("2017");
    expect(res.data.data[0].Population).toEqual(325719178);
  });
});
