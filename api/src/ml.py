from __future__ import absolute_import, division, print_function, unicode_literals

import pathlib

import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

print(tf.__version__)

#read the file
raw_dataset = pd.read_csv('./data/MassFlowData.csv')

dataset = raw_dataset.copy()
dataset.tail()
dataset = dataset.dropna()

sns.pairplot(dataset[["Hour_SAG1.DMT", "Hour_SAG2.DMT", "Hour_SAG1BallCharge.EST", "Hour_34WI1001.Solid"]], diag_kind="kde")
plt.show()