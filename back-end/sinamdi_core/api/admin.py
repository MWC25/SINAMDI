from django.contrib import admin
from .models import (
    AlgoritmosHash,
    StatusInstituicao,
    StatusCaso,
    RiscoNivel,
    Roles,
    TiposMidia,
    PublicosAlvo,
    FaixasEtarias,
    Generos,
    QuestoesAutoavaliacao,
    Estados,
    Municipios,
    Instituicoes,
    Usuarios,
    CasosInstitucionais,
    AutoAvaliacoes,
    MateriaisEducativos,
    UsuariosInstituicoes,
    AutoAvaliacoesRespostas,
    Auditoria,
    VwCasosAtivos,
    VwEstatisticasInstituicao,
)

# Registrar todas as models no admin
models = [
    AlgoritmosHash,
    StatusInstituicao,
    StatusCaso,
    RiscoNivel,
    Roles,
    TiposMidia,
    PublicosAlvo,
    FaixasEtarias,
    Generos,
    QuestoesAutoavaliacao,
    Estados,
    Municipios,
    Instituicoes,
    Usuarios,
    CasosInstitucionais,
    AutoAvaliacoes,
    MateriaisEducativos,
    UsuariosInstituicoes,
    AutoAvaliacoesRespostas,
    Auditoria,
    VwCasosAtivos,
    VwEstatisticasInstituicao,
]

for model in models:
    admin.site.register(model)
