from django.urls import path, include
from Mainapp import views

urlpatterns = [
    path('', views.init_scr_redirect),
    path('home', views.init_scr, name='home_page'),

    path('gene/exp', views.gene_exp_init, name='gene_expression'),
    path('gene/DE', views.gene_DE_init, name='gene_DE'),

    path('te', views.init_te_scr, name='te_home_page'),
    path('tf', views.init_tf_scr, name='tf_home_page'),
    path('auxdata/userguide', views.user_guide, name='user_guide'),

    path('jbrowse', views.jbrowse, name='jbrowse')
]
