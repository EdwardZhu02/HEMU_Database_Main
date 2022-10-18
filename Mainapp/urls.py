from django.urls import path, include, re_path
from Mainapp import views

urlpatterns = [
    # Home Page
    path('', views.init_scr_redirect),
    path('home', views.init_scr, name='home_page'),

    # Module: Gene
    path('gene/exp', views.gene_exp_init, name='gene_expression'),
    path('gene/DE', views.gene_DE_init, name='gene_DE'),
    re_path(r'^gene/static/(?P<identifier_name>\w+)/(?P<file_name>\w+.\w+);ht=(?P<frame_height>\d+);wid=('
            r'?P<frame_width>\d+)$',
            views.load_DE_staticfile),

    # Module: TE
    path('te/exp', views.te_exp_init, name='te_expression'),

    # Module: TF
    path('tf', views.init_tf_scr, name='tf_home_page'),
    path('auxdata/userguide', views.user_guide, name='user_guide'),

    # Module: Data Browse
    path('jbrowse', views.jbrowse, name='jbrowse'),

]
