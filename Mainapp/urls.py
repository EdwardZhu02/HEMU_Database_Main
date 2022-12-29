from django.urls import path, include, re_path
from Mainapp import views

urlpatterns = [
    # Home Page
    path('', views.init_scr_redirect),
    path('home', views.init_scr, name='home_page'),
    # Site manager
    path('home/site_manage', views.site_manage, name='site_manage'),

    # Module: Gene
    path('gene/exp', views.gene_exp_init, name='gene_expression'),
    path('gene/DE', views.gene_DE_init, name='gene_DE'),
    path('gene/gokegg', views.gokegg_enrich, name='gene_gokegg'),
    path('gene/wgcna', views.wgcna_stage1, name='wgcna_stage1'),
    path('gene/wgcna/interactive', views.wgcna_stage2, name='wgcna_stage2'),

    re_path(r'^gene/static/(?P<identifier_name>\w+)/(?P<file_name>\w+.\w+);ht=(?P<frame_height>\d+);wid=('
            r'?P<frame_width>\d+)$',
            views.load_DE_staticfile),
    path('gene/sequence/', views.gene_sequence_disp, name='gene_sequence'),

    # Module: TE
    path('te/exp', views.te_exp_init, name='te_expression'),
    path('te/insertion', views.te_insertion, name='te_insertion'),

    # Module: TF
    path('tf', views.init_tf_scr, name='tf_home_page'),
    path('auxdata/userguide', views.user_guide, name='user_guide'),

    # Module: Local External Servers
    path('jbrowse', views.jbrowse, name='jbrowse'),
    path('sequenceserver', views.seqserver, name='sequenceserver'),

]
