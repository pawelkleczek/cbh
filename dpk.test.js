const { deterministicPartitionKey } = require('./dpk');

describe("deterministicPartitionKey", () => {
  it("Returns the literal `0` when given no input", () => {
    expect(deterministicPartitionKey()).toBe("0");
  });

  it("Returns the `partitionKey` if it exists", () => {
    expect(deterministicPartitionKey({ partitionKey: "123" })).toBe("123");
  });

  it("Returns the hash if `partitionKey` does not exist", () => {
    expect(deterministicPartitionKey({ id: "123" })).toMatch(/^[a-f0-9]{128}$/);
  });

  it("Returns the stringified version of the candidate if it's not already a string", () => {
    const event = { partitionKey: { firstName: "John", lastName: "Doe" } };
    const candidate = JSON.stringify(event.partitionKey);
    expect(deterministicPartitionKey(event)).toBe(candidate);
  });

  it("Returns the hash of the candidate if its length > 256", () => {
    const lotsOfAs = "a".repeat(1000);
    expect(deterministicPartitionKey({ partitionKey: lotsOfAs })).toMatch(/^[a-f0-9]{128}$/);
  });
});
