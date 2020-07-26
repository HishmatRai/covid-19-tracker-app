import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {

    PieChart,

} from "react-native-chart-kit";
import { Dimensions } from "react-native";
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            confirmed: 0,
            recovered: 0,
            deaths: 0
        }
    }

    componentDidMount() {
        fetch('https://covid19.mathdro.id/api')
            .then((response) => response.json())
            .then((json) => {
                // return json.confirmed;
                console.log(json.confirmed.value)
                this.setState({
                    confirmed: json.confirmed.value,
                    recovered: json.recovered.value,
                    deaths: json.deaths.value
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const screenWidth = Dimensions.get("window").width;
        const data = [
            {
                name: "",
                population: this.state.confirmed ? this.state.confirmed : 0,
                color: "#8096CC",
                legendFontColor: "#8096CC",
                legendFontSize: 15
            },
            {
                name: "",
                population: this.state.deaths ? this.state.deaths : 0,
                color: "#EC8B35",
                legendFontColor: "#EC8B35",
                legendFontSize: 15
            },
            {
                name: "",
                population: this.state.recovered ? this.state.recovered : 0,
                color: "#4EBA6F",
                legendFontColor: "#4EBA6F",
                legendFontSize: 15
            }
        ];
        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
        };
        return (
            <View style={styles.container}>


                <PieChart
                    data={data}
                    width={screenWidth}
                    height={200}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
                <Text></Text>




                <View style={{ alignItems: 'center' }}>



                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("Home")}
                    >
                        <Text style={styles.totallist}>{this.state.confirmed} </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: 290 }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'red' }} />
                            <View>
                                <Text style={{ width: 0, textAlign: 'center' }}> </Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'red' }} />
                        </View>
                        <Text style={styles.totallistText}>TOTAL CASES </Text>

                    </TouchableOpacity>


                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 290 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <View>
                            <Text style={{ width: 0, textAlign: 'center' }}> </Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>

                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => this.props.navigation.navigate("Home")}
                    >
                        <Text style={styles.totallist}>{this.state.deaths} </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: 290 }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'red' }} />
                            <View>
                                <Text style={{ width: 0, textAlign: 'center' }}> </Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'red' }} />
                        </View>
                        <Text style={styles.totallistText}>TOTAL DEATHS </Text>

                    </TouchableOpacity>


                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 290 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <View>
                            <Text style={{ width: 0, textAlign: 'center' }}> </Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>


                    <TouchableOpacity
                        style={styles.button3}
                        onPress={() => this.props.navigation.navigate("Home")}
                    >
                        <Text style={styles.totallist}>{this.state.recovered} </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: 290 }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'red' }} />
                            <View>
                                <Text style={{ width: 0, textAlign: 'center' }}> </Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'red' }} />
                        </View>
                        <Text style={styles.totallistText}>TOTAL RECOVERED </Text>

                    </TouchableOpacity>


                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 290 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <View>
                            <Text style={{ width: 0, textAlign: 'center' }}> </Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>









                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#8096CC",
        padding: 10,
        width: 300,
        color: "white",
        borderRadius: 5,
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#EC8B35",
        padding: 10,
        width: 300,
        color: "white",
        borderRadius: 5,
    },
    button3: {
        alignItems: "center",
        backgroundColor: "#4EBA6F",
        padding: 10,
        width: 300,
        color: "white",
        borderRadius: 5,
    },

    countContainer: {
        alignItems: "center",
        padding: 10,
    },
    textInput: {
        height: 40,
        borderColor: '#f4811f',
        borderWidth: 1,
        width: 300,
        borderRadius: 5,
        padding: 10,

    },
    totallist: {
        color: "white",
        fontSize: 25
    },

    totallistText: {
        color: "white",
        fontSize: 25
    }


});

export default Login









