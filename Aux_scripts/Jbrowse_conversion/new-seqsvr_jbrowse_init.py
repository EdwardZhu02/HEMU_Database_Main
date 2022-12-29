import os
import sys
import re

###############
# Req: sys.argv[1]: two-letter abbreviation for the target species (eg. 'Zm' for Zea mays)
# Env: HEMUdb_new (remote server)
#
# TE family nomination: >GCF_000005005.2_Zm_TE0000001
#
use_original_fa_header = False  # don't convert fasta headers using the translation tab
#
###############


accession_name = os.getcwd().split("/")[-1].split("-")[0]
species_name = os.getcwd().split("/")[-1].split("-")[1]
folder_name = os.getcwd().split("/")[-1]
current_dir = os.getcwd() + "/"

# FASTA files
genome_fa = current_dir + accession_name + ".fa"
telib_fa = current_dir + accession_name + ".fa.mod.EDTA.TElib.fa"
# Annotation files
genome_gff = current_dir + "genomic.gff"
te_gff = current_dir + accession_name + ".fa.mod.EDTA.TEanno.gff3"
# Sequence translation tab
seq_tr_tab = current_dir + accession_name + "_FA_sequence_id_translation/" + accession_name + ".fa.translation.tab"

# Output
out_genome_fa = current_dir + accession_name + "_Sequence_Converted/" + accession_name + "_genome.fa"
out_te_fa = current_dir + accession_name + "_Sequence_Converted/" + accession_name + "_TElib.fa"
out_te_gff = current_dir + accession_name + "_Sequence_Converted/" + accession_name + "_TEanno.gff3"


def convert_chr_names(_seq_tr_tab, _genome_fa, _te_gff, _out_genome_fa, _out_te_gff,
                      _te_fa, _out_te_fa):
    # Make output directory
    os.system("mkdir %s" % current_dir + accession_name + "_Sequence_Converted")
    seqname_dict_fwd = {}  # Seq1 -> CM027681.1
    seqname_dict_fwd_chr = {}  # Seq1 -> NC_050105.1 Zea mays cultivar B73 chromosome 10

    if not use_original_fa_header:
        with open(_seq_tr_tab, mode='r') as lines:
            for line in lines:
                seqname_dict_fwd_chr[line.split("\t")[0]] = line.split("\t")[1]
                # Full name of a sequence
                seqname_dict_fwd[line.split("\t")[0]] = line.split("\t")[1].split(" ")[0]
                # Only the NCBI identifier of a sequence

    with open(_genome_fa, mode='r') as in_fh:
        with open(_out_genome_fa, mode='w') as out_fh:
            if not use_original_fa_header:
                for line in in_fh:
                    if line.startswith(">"):
                        out_fh.write(">" + seqname_dict_fwd_chr[line.lstrip(">").rstrip("\n")] + "\n")
                    else:
                        out_fh.write(line)
            else:
                for line in in_fh:
                    out_fh.write(line)

    with open(_te_fa, mode='r') as in_fh:
        with open(_out_te_fa, mode='w') as out_fh:
            for line in in_fh:
                if line.startswith(">"):
                    out_fh.write(">" + accession_name + "_" + sys.argv[1] + "_" + line.lstrip(">"))
                else:
                    out_fh.write(line)

    with open(_te_gff, mode='r') as in_fh:
        with open(_out_te_gff, mode='w') as out_fh:
            for line in in_fh:
                if not use_original_fa_header:
                    line_split_data = line.split("\t")
                    try:
                        if seqname_dict_fwd[line_split_data[0]]:
                            line_split_data[0] = seqname_dict_fwd[line_split_data[0]]
                            out_fh.write("\t".join(line_split_data))
                    except KeyError:
                        continue
                else:
                    out_fh.write(line)

def make_link():
    sequenceserver_libdir = "/data1/SequenceServer_lib/"
    # os.system("mkdir %s" % sequenceserver_libdir)
    os.system("cp %s %s" % (out_genome_fa, sequenceserver_libdir + "Genome/" + accession_name + "-" + species_name + "_genome.fa"))
    os.system("ln -s %s %s" % (out_te_fa, sequenceserver_libdir + "TE/" + accession_name + "-" + species_name + "_TElib.fa"))

    os.system("cd %s && bgzip -i %s && samtools faidx %s" % (
        current_dir + accession_name + "_Sequence_Converted",
        out_genome_fa,
        out_genome_fa + ".gz"
    ))

    jbrowse_libdir = "/data1/JBrowse/jbrowse_resources/" + accession_name + "-" + species_name + "/"
    os.system("mkdir %s" % jbrowse_libdir)

    # Sequence translation tab
    os.system("ln -s %s %s" % (seq_tr_tab, jbrowse_libdir + accession_name + "_seq_translation.tab"))

    # Genome and its index
    os.system("ln -s %s %s" % (out_genome_fa + ".gz", jbrowse_libdir + out_genome_fa.split("/")[-1] + ".gz"))
    os.system("ln -s %s %s" % (out_genome_fa + ".gz.gzi", jbrowse_libdir + out_genome_fa.split("/")[-1] + ".gz.gzi"))
    os.system("ln -s %s %s" % (out_genome_fa + ".gz.fai", jbrowse_libdir + out_genome_fa.split("/")[-1] + ".gz.fai"))

    os.system("ln -s %s %s" % (out_te_gff, jbrowse_libdir + out_te_gff.split("/")[-1]))
    os.system("ln -s %s %s" % (genome_gff, jbrowse_libdir + accession_name + "_genomic.gff"))

    return sequenceserver_libdir, jbrowse_libdir


def split_TE_gff_jbrowse(jbrowse_libdir, sp_abbr_name):
    LTR_TE_filecomp = []
    TIR_TE_filecomp = []
    helitron_TE_filecomp = []

    total_TE_filecomp = []  # Write back!
    with open(jbrowse_libdir + out_te_gff.split("/")[-1], mode='r') as entries:
        for indv_entry in entries:
            if not indv_entry.startswith("#"):

                indv_entry_split = indv_entry.split("\t")
                if indv_entry_split[2] in ["Copia_LTR_retrotransposon", "Gypsy_LTR_retrotransposon",
                                           "LTR_retrotransposon"]:
                    feature_list = indv_entry_split[8].split(";")
                    feature_list[1] = "=".join(
                        ["Name",
                         accession_name + "_" + sp_abbr_name + "_TE" + feature_list[1].split("=")[1].lstrip("TE")])
                    indv_entry_split[8] = ";".join(feature_list)
                    LTR_TE_filecomp.append("\t".join(indv_entry_split))
                    total_TE_filecomp.append("\t".join(indv_entry_split))

                elif indv_entry_split[2] in ["long_terminal_repeat", "repeat_region", "target_site_duplication"]:
                    LTR_TE_filecomp.append("\t".join(indv_entry_split))
                    feature_list = indv_entry_split[8].split(";")
                    feature_list[2] = "=".join(
                        ["Name", accession_name + "_" + sp_abbr_name + "_" + feature_list[2].split("=")[1]])
                    indv_entry_split[8] = ";".join(feature_list)
                    LTR_TE_filecomp.append("\t".join(indv_entry_split))
                    total_TE_filecomp.append("\t".join(indv_entry_split))

                elif indv_entry_split[2] in ["CACTA_TIR_transposon", "Mutator_TIR_transposon",
                                             "PIF_Harbinger_TIR_transposon", "Tc1_Mariner_TIR_transposon",
                                             "hAT_TIR_transposon"]:
                    feature_list = indv_entry_split[8].split(";")
                    feature_list[1] = "=".join(
                        ["Name", accession_name + "_" + sp_abbr_name + "_" + feature_list[1].split("=")[1]])
                    indv_entry_split[8] = ";".join(feature_list)
                    TIR_TE_filecomp.append("\t".join(indv_entry_split))
                    total_TE_filecomp.append("\t".join(indv_entry_split))

                elif indv_entry_split[2] in ["helitron"]:
                    feature_list = indv_entry_split[8].split(";")
                    feature_list[1] = "=".join(
                        ["Name", accession_name + "_" + sp_abbr_name + "_" + feature_list[1].split("=")[1]])
                    indv_entry_split[8] = ";".join(feature_list)
                    helitron_TE_filecomp.append("\t".join(indv_entry_split))
                    total_TE_filecomp.append("\t".join(indv_entry_split))

    with open(jbrowse_libdir + out_te_gff.split("/")[-1].split("TEanno")[0] + "LTR_TE.gff3", mode='w') as output:
        for indv_entry in LTR_TE_filecomp:
            output.write(indv_entry)
    with open(jbrowse_libdir + out_te_gff.split("/")[-1].split("TEanno")[0] + "TIR_TE.gff3", mode='w') as output:
        for indv_entry in TIR_TE_filecomp:
            output.write(indv_entry)
    with open(jbrowse_libdir + out_te_gff.split("/")[-1].split("TEanno")[0] + "helitron_TE.gff3", mode='w') as output:
        for indv_entry in helitron_TE_filecomp:
            output.write(indv_entry)

    with open(out_te_gff.rstrip(".gff3") + "_namefinal.gff3", mode='w') as output:
        for indv_entry in total_TE_filecomp:
            output.write(indv_entry)


def chr_alias_generator(jbrowse_libdir, _seq_tr_tab):
    seqname_alias_dict = {}
    # QWKM01000001.1 -> Sorghum bicolor cultivar Tx430 Contig_1, whole genome shotgun sequence
    # or
    # QWKM01000001.1 -> contig_1 (if a match is detected)

    segment_catcher_stx = re.compile(r'^.*(?P<ENTRY_NAME>([Cc]ontig|[Ss]caffold|[Cc]hromosome|[Cc]hr|['
                                     r'Cc]tg)_?\s?\d+).*$')

    with open(_seq_tr_tab, mode='r') as in_fh:
        for line in in_fh:
            if not use_original_fa_header:
                search_result = re.search(segment_catcher_stx, line.split("\t")[1])

                if search_result:
                    if len(search_result.group("ENTRY_NAME").split(" ")) > 1:
                        entry_name = "_".join(search_result.group("ENTRY_NAME").split(" "))
                    else:
                        entry_name = search_result.group("ENTRY_NAME")
                    seqname_alias_dict[line.split("\t")[1].split(" ")[0]] = str(entry_name).lower()
                else:
                    seqname_alias_dict[line.split("\t")[1].split(" ")[0]] = (" ".join(
                        line.split("\t")[1].split(" ")[1:]).rstrip("\n"))
                    print("Not matched, ", line.split("\t")[1])
            else:
                line1 = line.lstrip(">").rstrip("\n")
                search_result = re.search(segment_catcher_stx, line1)

                if search_result:
                    if len(search_result.group("ENTRY_NAME").split(" ")) > 1:
                        entry_name = "_".join(search_result.group("ENTRY_NAME").split(" "))
                    else:
                        entry_name = search_result.group("ENTRY_NAME")
                    seqname_alias_dict[line1] = str(entry_name).lower()
                else:
                    seqname_alias_dict[line1] = line1
                    print("Not matched, ", line1)

    with open(jbrowse_libdir + accession_name + "_chralias.txt", mode='w') as out_fh:
        for k, v in seqname_alias_dict.items():
            out_fh.write(k + "\t" + v + "\n")


def json_output(jbrowse_libdir):
    # PATH_TO_JBROWSE/?config=jbrowse_resources%2FGCA_009725075.1-Coix_aquatica%2Fconfig.json
    target_json_content = """
    {
      "assemblies": [
        {
          "name": "%s",
          "sequence": {
            "type": "ReferenceSequenceTrack",
            "trackId": "%s-1666873460320",
            "adapter": {
              "type": "BgzipFastaAdapter",
              "fastaLocation": {
                "locationType": "UriLocation",
                "uri": "http://1.12.73.21/jbrowse_resources/%s"
              },
              "faiLocation": {
                "locationType": "UriLocation",
                "uri": "http://1.12.73.21/jbrowse_resources/%s"
              },
              "metadataLocation": {
                "locationType": "UriLocation",
                "uri": "/path/to/fa.metadata.yaml"
              },
              "gziLocation": {
                "locationType": "UriLocation",
                "uri": "http://1.12.73.21/jbrowse_resources/%s"
              }
            },
            "displays": [
              {
                "type": "LinearReferenceSequenceDisplay",
                "displayId": "%s-1666873460320-LinearReferenceSequenceDisplay"
              }
            ]
          },
          "refNameAliases": {
            "adapter": {
              "type": "RefNameAliasAdapter",
              "location": {
                "locationType": "UriLocation",
                "uri": "/jbrowse_resources/%s"
              }
            }
          },
          "displayName": "%s"
        }
      ],
      "tracks": [
        {
          "type": "FeatureTrack",
          "trackId": "%s-1666873708106",
          "name": "%s",
          "assemblyNames": [
            "%s"
          ],
          "adapter": {
            "type": "Gff3Adapter",
            "gffLocation": {
              "locationType": "UriLocation",
              "uri": "http://1.12.73.21/jbrowse_resources/%s"
            }
          },
          "displays": [
            {
              "type": "LinearBasicDisplay",
              "displayId": "%s-1666873708106-LinearBasicDisplay",
              "renderer": {
                "type": "SvgFeatureRenderer",
                "color1": "rgb(101, 89, 137)"
              }
            },
            {
              "type": "LinearArcDisplay",
              "displayId": "%s-1666873708106-LinearArcDisplay"
            }
          ]
        },
        {
          "type": "FeatureTrack",
          "trackId": "%s-1666873737919",
          "name": "%s",
          "assemblyNames": [
            "%s"
          ],
          "adapter": {
            "type": "Gff3Adapter",
            "gffLocation": {
              "locationType": "UriLocation",
              "uri": "http://1.12.73.21/jbrowse_resources/%s"
            }
          },
          "displays": [
            {
              "type": "LinearBasicDisplay",
              "displayId": "%s-1666873737919-LinearBasicDisplay",
              "renderer": {
                "type": "SvgFeatureRenderer",
                "color1": "rgb(222, 136, 165)"
              }
            },
            {
              "type": "LinearArcDisplay",
              "displayId": "%s-1666873737919-LinearArcDisplay"
            }
          ]
        },
        {
          "type": "FeatureTrack",
          "trackId": "%s-1666873745920",
          "name": "%s",
          "assemblyNames": [
            "%s"
          ],
          "adapter": {
            "type": "Gff3Adapter",
            "gffLocation": {
              "locationType": "UriLocation",
              "uri": "http://1.12.73.21/jbrowse_resources/%s"
            }
          },
          "displays": [
            {
              "type": "LinearBasicDisplay",
              "displayId": "%s-1666873745920-LinearBasicDisplay",
              "renderer": {
                "type": "SvgFeatureRenderer",
                "color1": "rgb(103, 137, 186)"
              }
            },
            {
              "type": "LinearArcDisplay",
              "displayId": "%s-1666873745920-LinearArcDisplay"
            }
          ]
        }
      ]
    }
    
    """ % (
        folder_name, folder_name,  # Name, TrackID
        folder_name + "/" + out_genome_fa.split("/")[-1] + ".gz",
        folder_name + "/" + out_genome_fa.split("/")[-1] + ".gz.fai",
        folder_name + "/" + out_genome_fa.split("/")[-1] + ".gz.gzi",
        folder_name,  # DisplayID

        folder_name + "/" + accession_name + "_chralias.txt",
        folder_name.split("-")[-1],  # Alias display name

        (out_te_gff.split("/")[-1].split("TEanno")[0] + "helitron_TE.gff3").lower(),
        out_te_gff.split("/")[-1].split("TEanno")[0] + "helitron_TE.gff3",
        folder_name,
        folder_name + "/" + out_te_gff.split("/")[-1].split("TEanno")[0] + "helitron_TE.gff3",
        (out_te_gff.split("/")[-1].split("TEanno")[0] + "helitron_TE.gff3").lower(),
        (out_te_gff.split("/")[-1].split("TEanno")[0] + "helitron_TE.gff3").lower(),

        (out_te_gff.split("/")[-1].split("TEanno")[0] + "LTR_TE.gff3").lower(),
        out_te_gff.split("/")[-1].split("TEanno")[0] + "LTR_TE.gff3",
        folder_name,
        folder_name + "/" + out_te_gff.split("/")[-1].split("TEanno")[0] + "LTR_TE.gff3",
        (out_te_gff.split("/")[-1].split("TEanno")[0] + "LTR_TE.gff3").lower(),
        (out_te_gff.split("/")[-1].split("TEanno")[0] + "LTR_TE.gff3").lower(),

        (out_te_gff.split("/")[-1].split("TEanno")[0] + "TIR_TE.gff3").lower(),
        out_te_gff.split("/")[-1].split("TEanno")[0] + "TIR_TE.gff3",
        folder_name,
        folder_name + "/" + out_te_gff.split("/")[-1].split("TEanno")[0] + "TIR_TE.gff3",
        (out_te_gff.split("/")[-1].split("TEanno")[0] + "TIR_TE.gff3").lower(),
        (out_te_gff.split("/")[-1].split("TEanno")[0] + "TIR_TE.gff3").lower(),

    )
    with open(jbrowse_libdir + "config.json", mode='w') as out_fh:
        out_fh.write(target_json_content)


if __name__ == "__main__":
    if not len(sys.argv) == 2:
        print("Please specify species name abbr.")
        exit()

    convert_chr_names(seq_tr_tab, genome_fa, te_gff, out_genome_fa, out_te_gff, telib_fa, out_te_fa)

    _sequenceserver_libdir, _jbrowse_libdir = make_link()

    split_TE_gff_jbrowse(_jbrowse_libdir, sys.argv[1])
    chr_alias_generator(_jbrowse_libdir, _jbrowse_libdir + accession_name + "_seq_translation.tab")
    json_output(_jbrowse_libdir)
