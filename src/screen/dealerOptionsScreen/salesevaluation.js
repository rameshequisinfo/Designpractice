import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';

export default class salesevaluation extends Component {
  renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <TouchableOpacity style={styles.headerTouchable}>
          <Image
            source={require('./Images/menu.png')}
            style={styles.imgSize}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sales SOP Evaluation</Text>
      </View>
    );
  };

  renderTitle = () => {
    return (
      <View style={styles.listTitleView}>
        <Text style={styles.listTitleText}>KK Automobile</Text>
        <Text style={styles.listText}>(531343)</Text>
      </View>
    );
  };

  renderFacilityView = () => {
    return (
      <View style={styles.facilityView}>
        <Text style={styles.facilityText}>Facility</Text>
        <Text style={styles.totalText}>Total Score</Text>
        <Text style={styles.scoreText}>140</Text>
      </View>
    );
  };

  renderAppointmentView = () => {
    return (
      <View style={styles.appointmentView}>
        <View style={styles.enquiryTextView}>
          <Text style={styles.appointText}>Apppointment Enquiry Date</Text>
          <Text style={styles.appointNo}>+10</Text>
        </View>
        <TextInput style={styles.input} placeholder="Enquiry date" />
        <View style={styles.imgView}>
          <TouchableOpacity style={styles.touchImage}>
            <Image
              source={require('./Images/info.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchImage}>
            <Image
              source={require('./Images/add.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchImage}>
            <Image
              source={require('./Images/edit.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderContactQuestionView = () => {
    return (
      <View style={styles.contactQuestionView}>
        <View style={styles.contactView}>
          <View style={styles.enquiryTextView}>
            <Text style={styles.appointText}>You were contacted by</Text>
            <Text style={styles.appointNo}>+10</Text>
          </View>
          <TextInput style={styles.input} placeholder="Enter answer" />
          <View style={styles.imgView}>
            <TouchableOpacity style={styles.touchImage}>
              <Image
                source={require('./Images/info.png')}
                style={styles.imgSize}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchImage}>
              <Image
                source={require('./Images/add.png')}
                style={styles.imgSize}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchImage}>
              <Image
                source={require('./Images/edit.png')}
                style={styles.imgSize}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.questionView}>
          <View style={styles.enquiryTextView}>
            <Text style={styles.appointText}>Sub Questions</Text>
            {/* <Text style={styles.appointNo}>+10</Text> */}
          </View>
          <TextInput style={styles.input} placeholder="Choose an option" />
          <View style={styles.imgView}>
            <TouchableOpacity style={styles.touchImage}>
              <Image
                source={require('./Images/info.png')}
                style={styles.imgSize}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchImage}>
              <Image
                source={require('./Images/add.png')}
                style={styles.imgSize}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchImage}>
              <Image
                source={require('./Images/edit.png')}
                style={styles.imgSize}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderAnsView = () => {
    return (
      <View style={styles.ansView}>
        <View>
          <Text style={styles.appointText}>Did you get an answer under 4 hours after your enquiry?</Text>
          <Text style={styles.appointNo}>+10</Text>
        </View>
        
        <View style={styles.ansImgView}>
            <View style ={styles.yesNoView}>
              <Text style={styles.yesText}>Yes</Text>
              <Text style={styles.noText}>No</Text>
            </View>
            <TouchableOpacity style={styles.ansTouchImage}>
              <Image
                source={require('./Images/info.png')}
                style={styles.imgSize}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ansTouchImage}>
              <Image
                source={require('./Images/add.png')}
                style={styles.imgSize}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ansTouchImage}>
              <Image
                source={require('./Images/edit.png')}
                style={styles.imgSize}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
      </View>
    );
  };

  renderButton = () => {
    return (
        <View style={styles.btnView}>
          <View style={styles.backBtn}><Button title="Back" color='#D9D9D6'/></View>
          <View style={styles.nextBtn}><Button title="Next" color='#EFDF00'/></View>
        </View>
    );
  };
  render() {
    return (
         <View style={styles.container}>
          {this.renderHeader()}
          {this.renderTitle()}
          {this.renderFacilityView()}
          {this.renderAppointmentView()}
          {/*this.renderContactQuestionView()*/}
          {this.renderAnsView()}
          {this.renderButton()}
        </View> 
      
        
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerView: {
    height: '8%',
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTouchable: {
    width: '10%',
    height: '50%',
    alignItems: 'center',
  },
  imgSize: {
    height: '100%',
    width: '100%',
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    color: '#000',
  },

  listTitleView: {
    flexDirection: 'row',
    margin: 10,
  },
  listTitleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  listText: {
    fontSize: 12,
    color: '#888B8D',
    marginHorizontal: 5,
    fontWeight: 'bold',
  },

  facilityView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    backgroundColor: '#000',
    height: '7%',
  },
  facilityText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
    width: '60%',
  },
  totalText: {
    color: '#fff',
    marginRight: 5,
    width: '20%',
  },
  scoreText: {
    color: '#000',
    backgroundColor: '#EFDF00',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 5,
    width: '10%',
    textAlign: 'center',
    marginRight: 10,
  },
  input: {
    height: 56,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: '#D9D9D6',
    backgroundColor: '#fff',
  },
  imgSize: {
    height: '100%',
    width: '100%',
  },
  touchImage: {
    backgroundColor: '#000',
    width: '8%',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  appointmentView: {
    backgroundColor: '#D9D9D6',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    height: '22%',
  },
  enquiryTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appointText: {
    color: '#000',
  },
  appointNo: {
    color: '#000',
    backgroundColor: '#EFDF00',
    borderRadius: 5,
    width: '8%',
    textAlign: 'center',
    fontSize: 10,
    paddingVertical: 3,
  },
  contactQuestionView: {
    backgroundColor: '#D9D9D6',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    height: '45%',
  },
  contactView: {
    height: '50%',
  },
  questionView: {
    height: '50%',
    marginVertical: 5,
  },
  imgView: {
    flexDirection: 'row',
    height: '25%',
    justifyContent: 'flex-end',
  },
  ansView: {
    backgroundColor: '#D9D9D6',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    height:'20%'
  },
  ansImgView:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  yesNoView :{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginHorizontal:10,
    width:'40%',
  },
  ansTouchImage: {
    backgroundColor: '#000',
    width: '8%',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  btnView :{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingHorizontal:10
  },
  backBtn :{
    width:'50%',
  },
  nextBtn :{
    width:'50%',
    marginHorizontal:10,
    paddingRight:10
  },
  yesText:{
    borderRadius:10,
    backgroundColor:'#EFDF00',
    paddingVertical:10,
    paddingHorizontal:20,
    color:'#000'
  },
  noText:{
    borderWidth:1,
    borderRadius:10,
    borderColor:'#000',
    backgroundColor:'#D9D9D6',
    paddingVertical:10,
    paddingHorizontal:20,
    color:'#000'
  }
});
