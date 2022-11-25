import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import React, {Component} from 'react';

export default class screen6 extends Component {
  state = {shAct: false, counter: 0};
  setShow = (show, cnt) => {
    
    this.setState({shAct: show, counter: cnt});
  };

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
    const {shAct} = this.state;
    const {counter} = this.state;
    return (
      <View style={styles.appointmentView}>
        <View style={styles.enquiryTextView}>
          <TouchableOpacity style={styles.infoImg}>
            <Image
              source={require('./Images/info.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
              tintColor={'black'}
            />
          </TouchableOpacity>
          <Text style={styles.appointText}>Apppointment Enquiry Date</Text>
          <Text style={styles.appointNo}>+10 </Text>
        </View>
        <View style={styles.enquiryTxtImgView}>
          <View style={styles.imgTxtMainView}>
            <TextInput style={styles.input} placeholder="Enquiry date" />
            { (shAct == true && counter == 1 ) ? this.renderActionIcon() : null}
          </View>
          
          <TouchableOpacity
            style={styles.dotImg}
            onPress={(show,cnt) => this.setShow(true,1)}>
            <Image
              source={require('./Images/dot.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
              tintColor={'gray'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  
  renderActionIcon = () => {
    return (
      <View style={styles.actionImgView}>
        <TouchableOpacity
          style={styles.ansTouchImage}
          onPress={(show, cnt) => this.setShow(false ,1)}>
          <Image
            source={require('./Images/cancel.png')}
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
    );
  };

  renderTimeView = () => {

    const {shAct} = this.state;
    const {counter} = this.state;
    return (
      <View style={styles.appointmentView}>
        <View style={styles.enquiryTextView}>
          <TouchableOpacity style={styles.infoImg}>
            <Image
              source={require('./Images/info.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
              tintColor={'black'}
            />
          </TouchableOpacity>
          <Text style={styles.appointText}>Apppointment Enquiry Time</Text>
          <Text style={styles.appointNo}>+10</Text>
        </View>
        <View style={styles.enquiryTxtImgView}>
          <View style={styles.imgTxtMainView}>
          <TextInput style={styles.input} placeholder="Enquiry Time" />
            { (shAct == true && counter == 2) ? this.renderActionIcon() : null}
          </View>
          
          <TouchableOpacity style={styles.dotImg} onPress={(show,cnt) => this.setShow(true,2)}>
            <Image
              source={require('./Images/dot.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
              tintColor={'gray'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderUrlView = () => {
    return (
      <View style={styles.appointmentView}>
        <View style={styles.enquiryTextView}>
          <TouchableOpacity style={styles.infoImg}>
            <Image
              source={require('./Images/info.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
              tintColor={'black'}
            />
          </TouchableOpacity>
          <Text style={styles.appointText}>
            Please add the URL link of the website on which you made your
            enquiry
          </Text>
          <Text style={styles.appointNo}>+10</Text>
        </View>
        <View style={styles.enquiryTxtImgView}>
          <TextInput style={styles.input} placeholder="Enter URL" />
          <TouchableOpacity style={styles.dotImg}>
            <Image
              source={require('./Images/dot.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
              tintColor={'gray'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderSendEnquireView = () => {

    const {shAct} = this.state;
    const {counter} = this.state;
    return (
      <View style={styles.appointmentView}>
        <View style={styles.enquiryTextView}>
          <TouchableOpacity style={styles.infoImg}>
            <Image
              source={require('./Images/info.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
              tintColor={'black'}
            />
          </TouchableOpacity>
          <Text style={styles.appointText}>How did you send your enquiry?</Text>
          <Text style={styles.appointNo}>+10</Text>
        </View>
        <View style={styles.enquiryTxtImgView}>
        <View style={styles.imgTxtMainView}>
          <TextInput style={styles.input} placeholder="send enquiry" />
            { (shAct == true && counter == 3) ? this.renderActionIcon() : null}
          </View>
          
          <TouchableOpacity style={styles.dotImg} onPress={(show, cnt) => this.setShow(true,3)}>
            <Image
              source={require('./Images/dot.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
              tintColor={'gray'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderAnsView = () => {
    return (
      <View style={styles.ansView}>
        <View style={styles.enquiryTextView}>
          <TouchableOpacity style={styles.infoImg}>
            <Image
              source={require('./Images/info.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
              tintColor={'black'}
            />
          </TouchableOpacity>
          <Text style={styles.ansText}>
            Did you get an answer under 4 hours after your enquiry?
          </Text>
          <Text style={styles.appointNo}>+10</Text>
        </View>
        <View style={styles.ansImgView}>
          <View style={styles.yesNoView}>
            <Text style={styles.yesText}>Yes</Text>
            <Text style={styles.noText}>No</Text>
          </View>
        </View>
      </View>
    );
  };

  renderButton = () => {
    return (
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.btnText}>back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderHeader()}
          {this.renderFacilityView()}
          {this.renderAppointmentView()}
          {this.renderTimeView()}
          {/*this.renderUrlView()*/}
          {this.renderSendEnquireView()}
          {this.renderAnsView()}
          {this.renderButton()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: 50,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTouchable: {
    width: '10%',
    height: '100%',
    alignItems: 'center',
    marginHorizontal: 10,
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
  facilityView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    backgroundColor: '#000',
    height: 40,
    margin: 10,
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
  appointmentView: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    height: 100,
  },
  enquiryTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  appointText: {
    color: '#000',
    marginHorizontal: 10,
    width: '80%',
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
  input: {
    flex:1,
    // borderWidth: 1,
    marginVertical: 1,
    // borderRadius: 10,
    borderColor: '#D9D9D6',
    backgroundColor: '#fff',
    padding: 10,
  },
  infoImg: {
    backgroundColor: '#D9D9D6',
    height: '45%',
    width: '5%',
    padding: 2,
    borderRadius: 5,
  },
  enquiryTxtImgView: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  dotImg: {
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  ansView: {
    margin: 10,
    borderRadius: 10,
    height: 80,
  },
  ansImgView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  yesNoView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    width: '40%',
  },
  ansTouchImage: {
    backgroundColor: '#000',
    width: '20%',
    padding: 5,
    borderRadius: 5,
    height: '100%',
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    color: 'black',
    height: 120,
  },
  backBtn: {
    width: '48%',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  nextBtn: {
    width: '48%',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'yellow',
    color: 'black',
  },
  yesText: {
    borderRadius: 10,
    backgroundColor: '#EFDF00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#000',
  },
  noText: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    backgroundColor: '#D9D9D6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: '#000',
  },
  ansText: {
    color: '#000',
    marginHorizontal: 10,
    width: '80%',
    marginVertical: 5,
  },
  actionImgView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
    width: 150,
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    color: 'black',
    fontWeight: 'bold',
  },
  imgTxtMainView: {
    backgroundColor: 'white',
     flexDirection: 'row', flex: 1,
     borderRadius:10,
     borderWidth:1,
     overflow:'hidden'
  }
  
});
