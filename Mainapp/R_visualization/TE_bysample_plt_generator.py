import rpy2.robjects as robjects
from rpy2.robjects import pandas2ri
import random

pandas2ri.activate()  # Used for variable conversion (pd.DataFrame)


def TE_bysample_plt(_te_df, sample_id):

    robjects.globalenv['te_dataframe'] = _te_df
    robjects.globalenv['filename_id'] = sample_id

    plt_rscript = '''

    TE_sample_plotter <- function (te_dataframe, filename_id){
        rm(list=ls())

        library(tidyverse)
        library(patchwork)
        library(plotly)
        te_total_expressed = te_dataframe
        output_id = filename_id
        
        te_total_expressed = te_total_expressed[,-1]
        te_total_expressed$TE_class = as.factor(te_total_expressed$TE_class)
        te_total_expressed$TE_class_group = as.factor(te_total_expressed$TE_class_group)
        te_total_expressed$fpkm = as.numeric(te_total_expressed$fpkm)
        te_total_expressed$tpm = as.numeric(te_total_expressed$tpm)
        
        
        plt_TE_supfam = ggplot(data=te_total_expressed,
                  aes(x=TE_class, y=tpm)) +
          geom_jitter(aes(color=TE_class_group), width=0.2, size=0.5, alpha=0.4) +
          geom_boxplot(aes(fill=TE_class_group), alpha=0.6, notch = T, outlier.shape = NA) +
          
          theme(axis.text.x = element_text(angle = 0, size = 8),) +
          theme_bw() +
          scale_fill_brewer(palette = "BrBG") +
          scale_color_brewer(palette = "BrBG") +
          coord_flip() +
          theme(
                #panel.grid = element_blank(), 
                #panel.background = element_blank(), 
                axis.line = element_line(colour = 'black'),
                axis.text.x = element_text(size = 10, hjust = 1, angle = 45),
                axis.text.y = element_text(size = 10, hjust = 1),
            ) +
          ylim(1,200) +
          #facet_grid(TE_class_group~., drop = T) +
          xlab("TE Superfamily") + ylab("TPM") +
          labs(color = "Group", fill = "Group")
        
        
        plt_TE_group = ggplot(data=te_total_expressed, aes(x=TE_class_group, y=tpm)) +
          geom_jitter(aes(color=TE_class_group), width=0.1, size=0.5, alpha=0.2) +
          geom_boxplot(aes(fill=TE_class_group), alpha=0.6, notch = T, outlier.shape = NA) +
          scale_fill_brewer(palette = "BrBG") +
          scale_color_brewer(palette = "BrBG") +
          #coord_flip() +
          
          theme(
                panel.grid = element_blank(), 
                panel.background = element_blank(), 
                axis.line = element_line(colour = 'black'),
                axis.text.x = element_text(size = 10, hjust = 1, angle = 60),
                axis.text.y = element_text(size = 10, hjust = 1),
                legend.position = 'none'
            ) +
          ylim(1,200) +
          #facet_grid(TE_class_group~., drop = T) +
          xlab("TE Group") + ylab("TPM")
        
        
        output_plt_TE_supfam <- plotly::ggplotly(plt_TE_supfam)
        htmlwidgets::saveWidget(output_plt_TE_supfam, 
                                paste0("Mainapp/static/Temp_R_TE/", output_id,
                                       "_plt_TE_superfamily.html"),
                                selfcontained = TRUE)
        
        output_plt_TE_group <- plotly::ggplotly(plt_TE_group)
        htmlwidgets::saveWidget(output_plt_TE_group, 
                                paste0("Mainapp/static/Temp_R_TE/", output_id,
                                       "_plt_TE_group.html"),
                                selfcontained = TRUE)
    
    }
        
    '''

    robjects.r(plt_rscript)
    robjects.r['TE_sample_plotter'](_te_df, sample_id)  # Execute function

