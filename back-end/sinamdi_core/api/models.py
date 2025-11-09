"""
Models Django para o Sistema SINAMDI
Gerado via inspectdb e corrigido manualmente
"""

from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone


# ==============================================================================
# TABELAS DE DOMÍNIO E CONFIGURAÇÃO
# ==============================================================================


class AlgoritmosHash(models.Model):
    """Algoritmos de hash disponíveis para senhas"""

    id_algoritmo = models.AutoField(primary_key=True)
    nome = models.CharField(
        unique=True, max_length=50, help_text="Ex: bcrypt, argon2id"
    )
    versao = models.CharField(max_length=20, blank=True, null=True)
    is_ativo = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "algoritmos_hash"
        verbose_name = "Algoritmo de Hash"
        verbose_name_plural = "Algoritmos de Hash"
        ordering = ["nome"]

    def __str__(self):
        return f"{self.nome} {self.versao or ''}".strip()


class StatusInstituicao(models.Model):
    """Status possíveis para instituições"""

    id_status_instituicao = models.AutoField(primary_key=True)
    descricao = models.CharField(unique=True, max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "status_instituicao"
        verbose_name = "Status de Instituição"
        verbose_name_plural = "Status de Instituições"
        ordering = ["descricao"]

    def __str__(self):
        return self.descricao


class StatusCaso(models.Model):
    """Status possíveis para casos clínicos"""

    id_status_caso = models.AutoField(primary_key=True)
    descricao = models.CharField(unique=True, max_length=100)
    permite_reingresso = models.BooleanField(
        default=False, help_text="Se TRUE, paciente pode ter novo caso após este status"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "status_caso"
        verbose_name = "Status de Caso"
        verbose_name_plural = "Status de Casos"
        ordering = ["descricao"]

    def __str__(self):
        return self.descricao


class RiscoNivel(models.Model):
    """Níveis de risco para avaliação"""

    id_risco_nivel = models.AutoField(primary_key=True)
    descricao = models.CharField(unique=True, max_length=50)
    peso_calculo = models.IntegerField(
        help_text="Peso usado para calcular scores de risco",
        validators=[MinValueValidator(1)],
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "risco_nivel"
        verbose_name = "Nível de Risco"
        verbose_name_plural = "Níveis de Risco"
        ordering = ["peso_calculo"]

    def __str__(self):
        return f"{self.descricao} (Peso: {self.peso_calculo})"


class Roles(models.Model):
    """Perfis de acesso do sistema"""

    id_role = models.AutoField(primary_key=True)
    nome_role = models.CharField(
        unique=True,
        max_length=50,
        help_text="Ex: ADMIN_INSTITUICAO, PROFISSIONAL_SAUDE",
    )
    descricao = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "roles"
        verbose_name = "Role"
        verbose_name_plural = "Roles"
        ordering = ["nome_role"]

    def __str__(self):
        return self.nome_role


class TiposMidia(models.Model):
    """Tipos de mídia para materiais educativos"""

    id_tipo_midia = models.AutoField(primary_key=True)
    descricao = models.CharField(unique=True, max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "tipos_midia"
        verbose_name = "Tipo de Mídia"
        verbose_name_plural = "Tipos de Mídia"
        ordering = ["descricao"]

    def __str__(self):
        return self.descricao


class PublicosAlvo(models.Model):
    """Públicos-alvo para materiais educativos"""

    id_publico_alvo = models.AutoField(primary_key=True)
    descricao = models.CharField(unique=True, max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "publicos_alvo"
        verbose_name = "Público-Alvo"
        verbose_name_plural = "Públicos-Alvo"
        ordering = ["descricao"]

    def __str__(self):
        return self.descricao


class FaixasEtarias(models.Model):
    """Faixas etárias para categorização"""

    id_faixa_etaria = models.AutoField(primary_key=True)
    descricao = models.CharField(
        unique=True, max_length=50, help_text="Ex: 18-24, 25-34, 35-44"
    )
    idade_minima = models.IntegerField(
        blank=True, null=True, validators=[MinValueValidator(0), MaxValueValidator(150)]
    )
    idade_maxima = models.IntegerField(
        blank=True, null=True, validators=[MinValueValidator(0), MaxValueValidator(150)]
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "faixas_etarias"
        verbose_name = "Faixa Etária"
        verbose_name_plural = "Faixas Etárias"
        ordering = ["idade_minima"]

    def __str__(self):
        return self.descricao


class Generos(models.Model):
    """Gêneros autodeclarados"""

    id_genero = models.AutoField(primary_key=True)
    descricao = models.CharField(unique=True, max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "generos"
        verbose_name = "Gênero"
        verbose_name_plural = "Gêneros"
        ordering = ["descricao"]

    def __str__(self):
        return self.descricao


class QuestoesAutoavaliacao(models.Model):
    """Questões para formulário de autoavaliação"""

    TIPO_RESPOSTA_CHOICES = [
        ("NUMERO_0_10", "Número de 0 a 10"),
        ("SIM_NAO", "Sim ou Não"),
        ("MULTIPLA_ESCOLHA", "Múltipla Escolha"),
    ]

    id_questao = models.AutoField(primary_key=True)
    texto_questao = models.TextField()
    tipo_resposta = models.CharField(max_length=16, choices=TIPO_RESPOSTA_CHOICES)
    peso_risco = models.IntegerField(
        default=1,
        help_text="Peso da questão no cálculo do risco",
        validators=[MinValueValidator(0)],
    )
    ordem_exibicao = models.SmallIntegerField(blank=True, null=True)
    is_ativa = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "questoes_autoavaliacao"
        verbose_name = "Questão de Autoavaliação"
        verbose_name_plural = "Questões de Autoavaliação"
        ordering = ["ordem_exibicao", "id_questao"]

    def __str__(self):
        return f"Q{self.id_questao}: {self.texto_questao[:50]}..."


# ==============================================================================
# TABELAS GEOGRÁFICAS
# ==============================================================================


class Estados(models.Model):
    """Estados brasileiros (UF)"""

    id_uf = models.IntegerField(primary_key=True, help_text="Código IBGE do Estado")
    nome = models.CharField(max_length=100)
    sigla_uf = models.CharField(unique=True, max_length=2)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "estados"
        verbose_name = "Estado"
        verbose_name_plural = "Estados"
        ordering = ["sigla_uf"]

    def __str__(self):
        return f"{self.sigla_uf} - {self.nome}"


class Municipios(models.Model):
    """Municípios brasileiros"""

    cod_ibge_municipio = models.IntegerField(
        primary_key=True, help_text="Código IBGE do Município (7 dígitos)"
    )
    nome = models.CharField(max_length=255)
    id_uf = models.ForeignKey(
        Estados, on_delete=models.PROTECT, db_column="id_uf", related_name="municipios"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "municipios"
        verbose_name = "Município"
        verbose_name_plural = "Municípios"
        ordering = ["nome"]

    def __str__(self):
        return f"{self.nome}/{self.id_uf.sigla_uf}"


# ==============================================================================
# TABELAS PRINCIPAIS
# ==============================================================================


class Instituicoes(models.Model):
    """Instituições cadastradas no sistema"""

    id_instituicao = models.AutoField(primary_key=True)
    cnpj = models.CharField(unique=True, max_length=14)
    razao_social = models.CharField(max_length=255)
    cod_ibge_municipio = models.ForeignKey(
        Municipios,
        on_delete=models.PROTECT,
        db_column="cod_ibge_municipio",
        related_name="instituicoes",
    )
    id_status_instituicao = models.ForeignKey(
        StatusInstituicao,
        on_delete=models.PROTECT,
        db_column="id_status_instituicao",
        related_name="instituicoes",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True, help_text="Soft delete")

    class Meta:
        db_table = "instituicoes"
        verbose_name = "Instituição"
        verbose_name_plural = "Instituições"
        ordering = ["razao_social"]

    def __str__(self):
        return self.razao_social

    @property
    def is_active(self):
        """Verifica se a instituição está ativa"""
        return self.deleted_at is None


class Usuarios(models.Model):
    """Usuários do sistema"""

    id_usuario = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True, max_length=255)
    hash_senha = models.CharField(
        max_length=255, help_text="Hash da senha (bcrypt, argon2, etc)"
    )
    salt = models.CharField(max_length=255, help_text="Salt único para a senha")
    id_algoritmo_hash = models.ForeignKey(
        AlgoritmosHash,
        on_delete=models.PROTECT,
        db_column="id_algoritmo_hash",
        related_name="usuarios",
    )
    nome_completo = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True, help_text="Soft delete")
    ultimo_acesso = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = "usuarios"
        verbose_name = "Usuário"
        verbose_name_plural = "Usuários"
        ordering = ["nome_completo"]

    def __str__(self):
        return f"{self.nome_completo} ({self.email})"

    @property
    def is_active(self):
        """Verifica se o usuário está ativo"""
        return self.deleted_at is None

    def registrar_acesso(self):
        """Registra o último acesso do usuário"""
        self.ultimo_acesso = timezone.now()
        self.save(update_fields=["ultimo_acesso"])


class CasosInstitucionais(models.Model):
    """Casos clínicos registrados por instituições"""

    id_caso = models.AutoField(primary_key=True)
    id_instituicao = models.ForeignKey(
        Instituicoes,
        on_delete=models.PROTECT,
        db_column="id_instituicao",
        related_name="casos",
        help_text="Instituição responsável pelo caso",
    )
    id_usuario_registro = models.ForeignKey(
        Usuarios,
        on_delete=models.PROTECT,
        db_column="id_usuario_registro",
        related_name="casos_registrados",
        help_text="Profissional que registrou",
    )
    id_paciente_interno = models.CharField(
        max_length=100, help_text="ID interno da instituição"
    )
    id_faixa_etaria = models.ForeignKey(
        FaixasEtarias,
        on_delete=models.PROTECT,
        db_column="id_faixa_etaria",
        related_name="casos",
    )
    id_genero = models.ForeignKey(
        Generos,
        on_delete=models.PROTECT,
        db_column="id_genero",
        related_name="casos",
        blank=True,
        null=True,
    )
    cod_ibge_municipio = models.ForeignKey(
        Municipios,
        on_delete=models.PROTECT,
        db_column="cod_ibge_municipio",
        related_name="casos",
        help_text="Localização do caso",
    )
    id_risco_avaliado = models.ForeignKey(
        RiscoNivel,
        on_delete=models.PROTECT,
        db_column="id_risco_avaliado",
        related_name="casos",
    )
    id_status_caso = models.ForeignKey(
        StatusCaso,
        on_delete=models.PROTECT,
        db_column="id_status_caso",
        related_name="casos",
    )
    data_inicio_tratamento = models.DateField()
    data_fim_tratamento = models.DateField(
        blank=True, null=True, help_text="NULL se ainda em tratamento"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True, help_text="Soft delete")

    class Meta:
        db_table = "casos_institucionais"
        verbose_name = "Caso Institucional"
        verbose_name_plural = "Casos Institucionais"
        ordering = ["-data_inicio_tratamento"]
        indexes = [
            models.Index(fields=["id_instituicao", "id_paciente_interno"]),
            models.Index(fields=["id_status_caso"]),
            models.Index(fields=["data_inicio_tratamento"]),
        ]

    def __str__(self):
        return f"Caso {self.id_caso} - {self.id_instituicao.razao_social}"

    @property
    def is_active(self):
        """Verifica se o caso está ativo"""
        return self.deleted_at is None and self.data_fim_tratamento is None

    @property
    def duracao_tratamento(self):
        """Calcula a duração do tratamento em dias"""
        if self.data_fim_tratamento:
            return (self.data_fim_tratamento - self.data_inicio_tratamento).days
        return (timezone.now().date() - self.data_inicio_tratamento).days


class AutoAvaliacoes(models.Model):
    """Autoavaliações anônimas do público"""

    id_auto_avaliacao = models.BigAutoField(primary_key=True)
    cod_ibge_municipio = models.ForeignKey(
        Municipios,
        on_delete=models.SET_NULL,
        db_column="cod_ibge_municipio",
        related_name="auto_avaliacoes",
        blank=True,
        null=True,
        help_text="Opcional - usuário pode não informar",
    )
    id_faixa_etaria = models.ForeignKey(
        FaixasEtarias,
        on_delete=models.PROTECT,
        db_column="id_faixa_etaria",
        related_name="auto_avaliacoes",
    )
    id_genero = models.ForeignKey(
        Generos,
        on_delete=models.PROTECT,
        db_column="id_genero",
        related_name="auto_avaliacoes",
        blank=True,
        null=True,
    )
    score_risco_calculado = models.SmallIntegerField(
        help_text="Score final calculado", validators=[MinValueValidator(0)]
    )
    data_submissao = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "auto_avaliacoes"
        verbose_name = "Autoavaliação"
        verbose_name_plural = "Autoavaliações"
        ordering = ["-data_submissao"]
        indexes = [
            models.Index(fields=["data_submissao"]),
            models.Index(fields=["score_risco_calculado"]),
        ]

    def __str__(self):
        return f"Autoavaliação {self.id_auto_avaliacao} - Score: {self.score_risco_calculado}"


class MateriaisEducativos(models.Model):
    """Materiais educativos disponíveis"""

    id_material = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=255)
    descricao_curta = models.TextField(blank=True, null=True)
    url_conteudo = models.URLField(max_length=2048)
    id_tipo_midia = models.ForeignKey(
        TiposMidia,
        on_delete=models.PROTECT,
        db_column="id_tipo_midia",
        related_name="materiais",
    )
    id_publico_alvo = models.ForeignKey(
        PublicosAlvo,
        on_delete=models.PROTECT,
        db_column="id_publico_alvo",
        related_name="materiais",
    )
    is_ativo = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "materiais_educativos"
        verbose_name = "Material Educativo"
        verbose_name_plural = "Materiais Educativos"
        ordering = ["titulo"]

    def __str__(self):
        return self.titulo


# ==============================================================================
# TABELAS DE RELACIONAMENTO (M:N)
# ==============================================================================


class UsuariosInstituicoes(models.Model):
    """Relacionamento entre usuários e instituições"""

    id_usuario = models.ForeignKey(
        Usuarios,
        on_delete=models.CASCADE,
        db_column="id_usuario",
        related_name="vinculos_instituicoes",
    )
    id_instituicao = models.ForeignKey(
        Instituicoes,
        on_delete=models.CASCADE,
        db_column="id_instituicao",
        related_name="vinculos_usuarios",
    )
    id_role = models.ForeignKey(
        Roles, on_delete=models.PROTECT, db_column="id_role", related_name="vinculos"
    )
    is_ativo = models.BooleanField(default=True)
    data_vinculo = models.DateTimeField(auto_now_add=True)
    data_desvinculo = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = "usuarios_instituicoes"
        verbose_name = "Vínculo Usuário-Instituição"
        verbose_name_plural = "Vínculos Usuário-Instituição"
        unique_together = [["id_usuario", "id_instituicao"]]
        ordering = ["data_vinculo"]

    def __str__(self):
        return f"{self.id_usuario.nome_completo} @ {self.id_instituicao.razao_social}"


class AutoAvaliacoesRespostas(models.Model):
    """Respostas individuais das autoavaliações"""

    id_auto_avaliacao = models.ForeignKey(
        AutoAvaliacoes,
        on_delete=models.CASCADE,
        db_column="id_auto_avaliacao",
        related_name="respostas",
    )
    id_questao = models.ForeignKey(
        QuestoesAutoavaliacao,
        on_delete=models.PROTECT,
        db_column="id_questao",
        related_name="respostas",
    )
    valor_resposta = models.CharField(
        max_length=255, help_text="A resposta fornecida (ex: 8, SIM, opcao_a)"
    )

    class Meta:
        db_table = "auto_avaliacoes_respostas"
        verbose_name = "Resposta de Autoavaliação"
        verbose_name_plural = "Respostas de Autoavaliações"
        unique_together = [["id_auto_avaliacao", "id_questao"]]

    def __str__(self):
        return f"Resposta {self.id_auto_avaliacao.id_auto_avaliacao} - Q{self.id_questao.id_questao}"


# ==============================================================================
# TABELA DE AUDITORIA
# ==============================================================================


class Auditoria(models.Model):
    """Registro de auditoria de operações"""

    ACAO_CHOICES = [
        ("INSERT", "Inserção"),
        ("UPDATE", "Atualização"),
        ("DELETE", "Exclusão"),
    ]

    id_auditoria = models.BigAutoField(primary_key=True)
    tabela = models.CharField(max_length=50)
    id_registro = models.IntegerField()
    acao = models.CharField(max_length=6, choices=ACAO_CHOICES)
    id_usuario = models.ForeignKey(
        Usuarios,
        on_delete=models.SET_NULL,
        db_column="id_usuario",
        related_name="auditorias",
        blank=True,
        null=True,
    )
    timestamp = models.DateTimeField(auto_now_add=True)
    dados_antigos = models.JSONField(blank=True, null=True)
    dados_novos = models.JSONField(blank=True, null=True)
    ip_origem = models.GenericIPAddressField(blank=True, null=True)

    class Meta:
        db_table = "auditoria"
        verbose_name = "Registro de Auditoria"
        verbose_name_plural = "Registros de Auditoria"
        ordering = ["-timestamp"]
        indexes = [
            models.Index(fields=["tabela", "id_registro"]),
            models.Index(fields=["timestamp"]),
        ]

    def __str__(self):
        return f"{self.acao} em {self.tabela}#{self.id_registro}"


# ==============================================================================
# VIEWS (Somente Leitura)
# ==============================================================================


class VwCasosAtivos(models.Model):
    """View de casos ativos - Somente leitura"""

    id_caso = models.IntegerField(primary_key=True)
    razao_social = models.CharField(max_length=255)
    profissional_responsavel = models.CharField(max_length=255)
    status_descricao = models.CharField(max_length=100)
    nivel_risco = models.CharField(max_length=50)
    municipio = models.CharField(max_length=255)
    sigla_uf = models.CharField(max_length=2)

    class Meta:
        managed = False
        db_table = "vw_casos_ativos"
        verbose_name = "Caso Ativo (View)"
        verbose_name_plural = "Casos Ativos (View)"

    def __str__(self):
        return f"Caso {self.id_caso} - {self.razao_social}"


class VwEstatisticasInstituicao(models.Model):
    """View de estatísticas por instituição - Somente leitura"""

    id_instituicao = models.IntegerField(primary_key=True)
    razao_social = models.CharField(max_length=255)
    total_casos = models.IntegerField()
    casos_ativos = models.IntegerField()
    casos_concluidos = models.IntegerField()

    class Meta:
        managed = False
        db_table = "vw_estatisticas_instituicao"
        verbose_name = "Estatística de Instituição (View)"
        verbose_name_plural = "Estatísticas de Instituições (View)"

    def __str__(self):
        return f"{self.razao_social} - {self.total_casos} casos"
