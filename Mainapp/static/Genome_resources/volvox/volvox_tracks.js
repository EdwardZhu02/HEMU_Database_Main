export default [
  {
    type: "AlignmentsTrack",
    trackId: "volvox-long-reads.fastq.sorted",
    name: "volvox-long-reads.fastq.sorted",
    adapter: {
      type: "BamAdapter",
      bamLocation: {
        uri: "../static/Genome_resources/volvox-long-reads.fastq.sorted.bam",
        locationType: "UriLocation"
      },
      index: {
        location: {
          uri: "../static/Genome_resources/volvox-long-reads.fastq.sorted.bam.bai",
          locationType: "UriLocation"
        },
        indexType: "BAI"
      },
      sequenceAdapter: {
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
  },
  {
    type: "FeatureTrack",
    trackId: "Volvox Genes",
    name: "Volvox Genes",
    adapter: {
      type: "Gff3Adapter",
      gffLocation: {
        uri: "../static/Genome_resources/volvox.gff3",
        locationType: "UriLocation"
      }
    },
    assemblyNames: [
      "volvox"
    ]
  },
  {
      type: "AlignmentsTrack",
      trackId: "volvox-sv",
      name: "volvox-sv",
      adapter: {
        type: "BamAdapter",
        bamLocation: {
          uri: "../static/Genome_resources/volvox-sv.bam",
          locationType: "UriLocation"
        },
        index: {
          location: {
            uri: "../static/Genome_resources/volvox-sv.bam.bai",
            locationType: "UriLocation"
          },
          indexType: "BAI"
        },
        sequenceAdapter: {
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
      assemblyNames: [
        "volvox"
      ]
    },
    {
      type: "AlignmentsTrack",
      trackId: "volvox-sorted",
      name: "volvox-sorted",
      adapter: {
        type: "BamAdapter",
        bamLocation: {
          uri: "../static/Genome_resources/volvox-sorted.bam",
          locationType: "UriLocation"
        },
        index: {
          location: {
            uri: "../static/Genome_resources/volvox-sorted.bam.bai",
            locationType: "UriLocation"
          },
          indexType: "BAI"
        },
        sequenceAdapter: {
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
      assemblyNames: [
        "volvox"
      ]
    }
]