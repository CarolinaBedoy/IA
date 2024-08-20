import pandas as pd
import numpy as np
from sklearn import preprocessing
import matplotlib.pyplot as plt
plt.rc("font", size=14)
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import seaborn as sns
from seaborn import load_dataset
sns.set(style="white")
sns.set(style="whitegrid", color_codes=True)
import statsmodels.api as sm
import math
from sklearn import metrics
from sklearn.metrics import confusion_matrix
import os
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from flask import Flask, request, render_template
import sys

# Establecer el directorio de trabajo
os.chdir("C:/Users/Caro/Downloads/")
print(os.getcwd())

# Cargar el archivo de datos
datos = "Mentaldisordersymptoms.xlsx"
df = pd.read_excel(datos)

# Visualizar información sobre el DataFrame
print("Dimensiones del DataFrame:", df.shape)
print("Información sobre las columnas:")
print(df.info())
print("Nombres de las columnas:", df.columns)
print("Tipos de datos de las columnas:")
print(df.dtypes)

# Histograma de la distribución de trastornos
plt.hist(df["Disorder"])
plt.title("Distribución de trastornos")
plt.xlabel("Tipo de trastorno")
plt.ylabel("Total de pacientes")
plt.show()

# Lista de todos los nombres de columnas que representan los síntomas
sintomas = [
    "feeling.nervous", "panic", "breathing.rapidly", "sweating",
    "trouble.in.concentration", "having.trouble.in.sleeping", "having.trouble.with.work",
    "hopelessness", "anger", "over.react", "change.in.eating", "suicidal.thought",
    "feeling.tired", "close.friend", "social.media.addiction", "weight.gain",
    "introvert", "popping.up.stressful.memory", "having.nightmares", "avoids.people.or.activities",
    "feeling.negative", "trouble.concentrating", "blamming.yourself", "hallucinations",
    "repetitive.behaviour", "seasonally","increased.energy"
]

# Crear subplots para cada síntoma
fig, axs = plt.subplots(9, 3, figsize=(18, 24))

# Recorrer cada síntoma y generar un histograma para cada uno
for i, sintoma in enumerate(sintomas):
    # Calcular la fila y columna correspondiente para el subplot actual
    fila = i // 3
    columna = i % 3

    # Crear histograma para el síntoma actual
    axs[fila, columna].hist(df[sintoma], bins=2)  # Puedes ajustar el número de bins según necesites
    axs[fila, columna].set_title(f"Distribución de pacientes según '{sintoma}'")
    axs[fila, columna].set_xlabel(f"Valor de '{sintoma}'")
    axs[fila, columna].set_ylabel("Total de pacientes")

# Ajustar el espaciado entre subplots
plt.tight_layout()
plt.show()

# Separar características y variable objetivo
X = df.drop("Disorder", axis=1)  # Características (síntomas)
y = df["Disorder"]  # Variable objetivo

# Dividir los datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Inicializar el clasificador Random Forest
clf = RandomForestClassifier()

# Entrenar el modelo
clf.fit(X_train, y_train)


# Hacer predicciones en los datos de prueba
y_pred = clf.predict(X_test)


# Evaluar el modelo
accuracy = accuracy_score(y_test, y_pred)
print("Precisión del modelo:", accuracy)



@app.route('/consulta')
def consulta(request):
    if request.method == 'POST':
        result = clf.predict(request.POST['score'])
        return JsonResponse({resultado : result})
    else:
        return HttpResponse("Fail")  
#print("Nuevo Paciente",clf.predict(sys.argv))
