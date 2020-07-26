import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import { Card, CardItem, Body } from 'native-base';
class News extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Image source={{ uri: 'https://img.freepik.com/free-vector/mix-race-people-crowd-protective-masks-epidemic-stop-coronavirus-concept-wuhan-pandemic-medical-health-risk-portrait-horizontal_48369-23140.jpg?size=626&ext=jpg' }} style={{ height: 200, width: null, flex: 1 }} />
            <Card>
              <CardItem header>
                <Text>Pakistan Plans Another COVID-19 Lockdown. Will It Work?</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    The government in Pakistan is considering the imposition of another countrywide lockdown if the COVID-19 situation continues to get worse. For Pakistan, flattening the curve and containing the virus’ spread by imposing a lockdown may have already become irrelevant. The utility of the lockdown was highest when the crisis was at an early stage and limited to Pakistan’s urban areas. With the virus’ spread now hitting all corners of the country and transmission patterns developing in rural areas, it is unclear if another lockdown is the solution or if it can be implemented at all.

                    Pakistan’s hospitals are already operating above their capacity and turning away patients. Officially, the tally of COVID-19 cases in Pakistan has surpassed 60,000. So far, more than 1,200 people have died all across Pakistan. During the last 24 hours alone, around 2,400 people affected by the COVID-19 were admitted to public hospitals or facilities created by the government. According to the latest figures, Pakistan only has around 4,000 ventilators, of which 2,200 are possessed by public sector hospitals. During the last two days, more than 150 people were put on the ventilators across the country.

                    Pakistan faces a serious crisis when it comes to tracking the pandemic’s spread, and monitoring the severity of the situation. The actual story of the crisis is far worse than being reported. The cases emerging in the major urban areas are the key focus for the health officials. Arguably, it’s one of the reasons that cities like Karachi, Lahore, Peshawar, and Islamabad have recorded more cases than other places. Smaller cities and adjacent towns across Pakistan, which are not the focus of the public health officials, neither have the capacity nor infrastructure in place to handle COVID-19 cases or record them correctly for the national or international audience. According to the World Health Organization (WHO), the current toll of fatalities from the COVID-19 cannot be gauged accurately in low or middle-income countries where only 30 percent of deaths take place in hospitals with known causes. This scenario is actually true for Pakistan as a growing number of people potentially dying from the virus only leave trails of breathing problems among their relatives and friends. On the other hand, in the country’s rural areas, no effort whatsoever is being made to either educate people of the virus’s threat or to test, track, and record cases.

                    According to a WHO report published last week, COVID-19’s local transmission in Pakistan has risen to 80 percent. By lifting the lockdown, the government may have created an opening for the virus’ spread that may have been nonexistent before. For instance, there is still an ongoing debate about whether the virus’ spread has taken place in Pakistan’s rural areas. There is no data to back any claim as the government is not accurately recording cases from the country’s rural areas. However, one can argue that one week of the Eid holidays and the lifting of the lockdown that allowed millions of workers to travel back to their villages from major urban zones may have worsened the problem. There are real risks that these workers might have taken the virus back to their villages, setting up new clusters in regions that may have been previously safe.

                    Going forward, it is unclear how the government plans to contain the virus’ spread when it couldn’t implement a clear policy during the early stages of the pandemic. The imposition of another lockdown is set to fail for several reasons. Pakistan has never implemented a complete lockdown in a true sense. In this regard, the scuffle between the center and the provinces continues to pose a challenge. Right-wing hardliners want to keep mosques open while small and major businesses have developed lobbies within the government to push for the opening of the economy.

                    Pakistan’s ruling party remains a divided house on the matter too. The country’s social media is abuzz with posts from the government’s ministers pushing for the opening of businesses and others asking for a strict lockdown to contain the virus’s spread. Making the situation worse is the stressed capacity of the health care system, lack of training of the staff to record cases accurately, and the unavailability of the protective equipment. Reportedly, testing labs in Pakistan are operating under war conditions. The percentage of errors in collecting samples is very high. Recently, one of the largest testing facilities for coronavirus in Pakistan “received a batch of 800 samples from Bahawalpur in Punjab, of which only 261 could be processed.”

                    “The labels were wrong, the samples had leaked, the tags had rubbed off. This affects our testing capacity and accuracy,” said a doctor working in the facility.

                    The government has never communicated its policy firmly or with a clear-headed approach. Talk of another lockdown will not ease Pakistan’s troubles. In fact, it’s unlikely that people are going to follow the announcement of another lockdown as economic pressures reach boiling point. The best and perhaps the only time to effectively impose a strict lockdown was when the crisis was at the early stages and the government had a narrative to sell.

                    From here onward, news of another lockdown with zero or no enforcement strategy will only create more problems. As the government loses control of the situation, it is COVID-19 that will decide the fate of millions of Pakistanis.
                </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text>Umair Jamal</Text>
              </CardItem>
            </Card>
          </ScrollView></SafeAreaView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },



  countContainer: {
    alignItems: "center",
    padding: 10,
  },


});

export default News









