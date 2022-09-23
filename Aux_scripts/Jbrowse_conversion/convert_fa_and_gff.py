import os

accession_name = os.getcwd().split("/")[-1]
current_dir = os.getcwd() + "/"

# FASTA files
genome_fa = current_dir + accession_name + ".fa"
telib_fa = current_dir + accession_name + ".fa.mod.EDTA.TElib.fa"
# Annotation files
genome_gff = current_dir + "genomic.gff"
te_gff = current_dir + accession_name + ".fa.mod.EDTA.TEanno.gff3"
# Sequence translation tab
seq_tr_tab = current_dir + accession_name + "_FA_sequence_id_translation/" + accession_name + ".fa.translation.tab"

out_genome_fa = current_dir + accession_name + "_Sequence_Converted/" + accession_name + "_genome_conv.fa"
out_te_gff = current_dir + accession_name + "_Sequence_Converted/" + accession_name + "_TE_conv.gff3"


def convert_chr_names(_seq_tr_tab, _genome_fa, _te_gff, _out_genome_fa, _out_te_gff):
    # Make output directory
    os.system("mkdir %s" % current_dir + accession_name + "_Sequence_Converted")
    seqname_dict_fwd = {}  # Seq1 -> CM027681.1

    with open(_seq_tr_tab, mode='r') as lines:
        for line in lines:
            seqname_dict_fwd[line.split("\t")[0]] = line.split("\t")[1].split(" ")[0]
    with open(_genome_fa, mode='r') as in_fh:
        with open(_out_genome_fa, mode='w') as out_fh:
            for line in in_fh:
                if line.startswith(">"):
                    out_fh.write(">" + seqname_dict_fwd[line.lstrip(">").rstrip("\n")] + "\n")
                else:
                    out_fh.write(line)
    with open(_te_gff, mode='r') as in_fh:
        with open(_out_te_gff, mode='w') as out_fh:
            for line in in_fh:
                line_split_data = line.split("\t")
                try:
                    if seqname_dict_fwd[line_split_data[0]]:
                        line_split_data[0] = seqname_dict_fwd[line_split_data[0]]
                        out_fh.write("\t".join(line_split_data))
                except KeyError:
                    continue


convert_chr_names(seq_tr_tab, genome_fa, te_gff, out_genome_fa, out_te_gff)