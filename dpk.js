const crypto = require("crypto");

const ENCODING = 'hex'
const ALGORITHM = 'sha3-512'
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  const candidate = event.partitionKey || hash(JSON.stringify(event));

  if (typeof candidate !== "string") {
    return JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return hash(candidate);
  }

  return candidate;
};

function hash(fragment) {
  return crypto.createHash(ALGORITHM).update(fragment).digest(ENCODING)
}
