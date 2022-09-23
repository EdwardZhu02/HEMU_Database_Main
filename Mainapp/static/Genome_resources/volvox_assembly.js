export default {
  name: "volvox",
  sequence: {
    type: "ReferenceSequenceTrack",
    trackId: "volvox-ReferenceSequenceTrack",
    adapter: {
      type: "IndexedFastaAdapter",
      fastaLocation: {
        uri: "../static/Genome_resources/volvox.fa",
        locationType: "UriLocation"
      },
      faiLocation: {
        uri: "../static/Genome_resources/volvox.fa.fai",
        locationType: "UriLocation"
      }
    }
  },
  displayName: "Volvox Genome"
}