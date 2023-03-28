<template>
    <v-container fill-height fluid style="background-color: #4c1f67;">
        <v-row justify="center">
            <h1 style="color: #ff8236;">SIELE</h1>
        </v-row>
        <v-row justify="center" align="center">
            
            <v-col  align="center" style="background-color: #714b84;">
                <v-card style="background-color: #b9a3be;">
                <p>Ete Sech</p>
                <p>Datos de maestros</p>
                <p>Datos de maestros</p>
                <p>Datos de maestros</p>
                <p>Datos de maestros</p>
                <p>Datos de maestros</p>

                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Clases
                                  </th>
                                  <th class="text-left">
                                    Hora
                                  </th>
                                  <th class="text-left">
                                    Nivel
                                  </th>
                                  <th class="text-left">
                                    Clave
                                  </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>8:00 am</td>
                                <td>Nivel 1</td>
                                <td>666420</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>9:00 am</td>
                                <td>Nivel 2</td>
                                <td>666420</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>10:00 am</td>
                                <td>Nivel 3</td>
                                <td>666420</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>11:00 am</td>
                                <td>Nivel 4</td>
                                <td>666420</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                </v-card>
            </v-col>
           
        </v-row>
        <v-row justify="center">
            <v-col cols="7">
                
            </v-col>
           
        </v-row>
    </v-container>
</template>