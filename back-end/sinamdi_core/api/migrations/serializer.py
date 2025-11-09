from rest_framework import serializers
from .models import VwEstatisticasInstituicao  # Importa a View que o inspectdb criou


class EstatisticasInstituicaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VwEstatisticasInstituicao
        fields = [
            "id_instituicao",
            "razao_social",
            "total_casos",
            "casos_ativos",
            "casos_concluidos",
        ]

        read_only_fields = fields
