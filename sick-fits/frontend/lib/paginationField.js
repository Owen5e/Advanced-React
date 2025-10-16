export default function paginationField() {
  return {
    keyArgs: false, // tells apollo we will take care of everything
    read(existing = [], { args, cache }) {
      // First thing it does is ask the read function for those items
      // We can either do one of two things...
      // 1. Return the items because they are already in the cache
      // 2. Return undefined (network request) to go and fetch them
    },
    merge() {
      // This runs when the apollo client comes back from the network with our products
    },
  };
}
