import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';

const DATA = [
  {
    id: '1',
    title: 'DELIVERY DATE',
    value: '30-SEP-2022',
    view: false,
  },
  {
    id: '2',
    title: 'REGISTRATION NO',
    value: 'MP09ZC6783',
    view: false,
  },
  {
    id: '3',
    title: 'MOBILE',
    value: '9898082047',
    view: false,
  },
  {
    id: '4',
    title: 'MODEL / VARIANT',
    value: 'KWID / RENAULT KWID RXT',
    view: true,
  },
  {
    id: '5',
    title: 'ACES',
    value: 'YES',
    view: false,
  },
  {
    id: '6',
    title: 'MYR USER',
    value: 'YES',
    view: false,
  },
  {
    id: '7',
    title: 'GOD',
    value: 'NO',
    view: false,
  },
  {
    id: '8',
    title: 'MODEL YEAR',
    value: '2022',
    view: false,
  },
  {
    id: '9',
    title: 'WARRANTY',
    value: '30-SEP-2022 TO 30-SEP-2024',
    view: false,
  },
  {
    id: '10',
    title: 'RSA DATE',
    value: 'NA',
    view: true,
  },
  {
    id: '11',
    title: 'INSURANCE MONTH',
    value: 'SEP',
    view: false,
  },
  {
    id: '12',
    title: 'FUEL TYPE',
    value: 'PETROL',
    view: false,
  },
  {
    id: '13',
    title: 'MOTRIO',
    value: 'NO',
    view: false,
  },
  {
    id: '14',
    title: 'EASY CARE',
    value: 'NO',
    view: true,
  },
];

export default class myroutine extends Component {
  renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <TouchableOpacity style={styles.headerTouchable}>
          <Image
            source={require('./Images/left-arrow.png')}
            style={styles.imgSize}
            resizeMode={'contain'}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>Estimate</Text>

        <View style={styles.phoneSaveView}>
          <TouchableOpacity style={styles.phoneTouchable}>
            <Image
              source={require('./Images/phone-call.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.phoneText}>Call</Text>
        </View>
        <View style={styles.phoneSaveView}>
          <TouchableOpacity style={styles.saveTouchable}>
            <Image
              source={require('./Images/save-data.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.phoneText}>Save</Text>
        </View>
      </View>
    );
  };

  renderTrest = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between',height:100}}>
        <View style={{height: '100%', width: '45%'}}>
          <View style={{padding: 5}}>
            <Text>Name</Text>
            <Text>Tushar Nirvan</Text>
          </View>
          <View style={{padding: 5,  borderColor: 'gray'}}>
            <Text>VIN</Text>
            <Text>MEEBBA00XN6814346</Text>
          </View>
        </View>
        <View
          style={{
            height: '100%',
            width: '15%',
            borderColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Smily</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'pink'}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: 'black',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', flex: 1, textAlign: 'center'}}>
              EDIT
            </Text>
            <Image
              style={{
                width: 15,
                height: 15,
                tintColor: 'white',
                marginHorizontal: 10,
              }}
              source={require('./Images/edit-icon.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: 'black',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', flex: 1, textAlign: 'center'}}>
              SERVICE HISTORY
            </Text>
            <Image
              style={{
                width: 15,
                height: 15,
                tintColor: 'white',
                marginHorizontal: 10,
              }}
              source={require('./Images/history.png')}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderNameEdit = () => {
    return (
      <View
        style={[styles.nameEditView, {height: 100, backgroundColor: 'red'}]}>
        <View style={{height: 100, backgroundColor: 'green'}}>
          <View style={{height: 50, backgroundColor: 'pink'}}>
            <Text>Name</Text>
            <Text>Tushar Nirvan</Text>
          </View>
          <View style={{height: '50%'}}>
            <Text>VIN</Text>
            <Text>MEEBBA00XN6814346</Text>
          </View>
        </View>
        <View style={{height: '100%'}}>
          <View style={styles.editTxtImgView}>
            <Text style={{color: 'white'}}>EDIT</Text>
            <TouchableOpacity style={styles.editTouchable}>
              <Image
                source={require('./Images/edit-icon.png')}
                style={styles.imgSize}
                resizeMode={'contain'}
                tintColor={'white'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.editTxtImgView}>
            <Text style={{color: 'white'}}>SERVICE HISTORY</Text>
            <TouchableOpacity style={styles.editTouchable}>
              <Image
                source={require('./Images/history.png')}
                style={styles.imgSize}
                resizeMode={'contain'}
                tintColor={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.itemView}>
        <Text style={[styles.listTxtWidth, {width: '50%'}]}>{item.title}</Text>
        <Text
          style={[
            styles.listTxtWidth,
            {width: item.view === true ? '40%' : '50%'},
          ]}>
          {item.value}
        </Text>
        {item.view === true ? (
          <TouchableOpacity style={{width: '20%'}}>
            <Text style={styles.viewTxt}>View</Text>
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
    );
  };

  renderList = () => {
    return (
      <View style={styles.listView}>
        <FlatList
          data={DATA}
          extraData={['', '', '', '']}
          renderItem={this.renderItem}
        />
      </View>
    );
  };

  renderFooter = () => {
    return (
      <View style={styles.footerView}>
        <View>
          <TouchableOpacity style={styles.footerTouchable}>
            <Image
              source={require('./Images/car.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text>Vin Info</Text>
        </View>
        <View style={styles.footerLineView} />

        <View>
          <TouchableOpacity style={styles.footerTouchable}>
            <Image
              source={require('./Images/car-repair.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text>Inspection</Text>
        </View>
        <View style={styles.footerLineView} />
        <View>
          <TouchableOpacity style={styles.footerTouchable}>
            <Image
              source={require('./Images/technical-support.png')}
              style={styles.imgSize}
              resizeMode={'contain'}
            />
          </TouchableOpacity>

          <Text>Service Type</Text>
        </View>
      </View>
    );
  };

  renderCostView = () => {
    return (
      <View style={styles.costView}>
        <View style={styles.rowDirection}>
          <Text style={styles.estimateTotalTxt}>ESTIMATE COST</Text>
          <Text style={styles.estimateTotalPrice}>0.0</Text>
        </View>
        <View style={styles.rowDirection}>
          <Text style={styles.discountTxt}>DISCOUNT & OFFERS</Text>
          <Text style={styles.discountPrice}>0.0</Text>
        </View>
        <View style={styles.rowDirection}>
          <Text style={styles.estimateTotalTxt}>TOATL COST</Text>
          <Text style={styles.estimateTotalPrice}>0.0</Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView>
          {this.renderTrest()}
           {this.renderList()} 
        </ScrollView>
        {this.renderFooter()}
        {this.renderCostView()}
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerTouchable: {
    width: 15,
    height: 40,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  phoneTouchable: {
    width: 20,
    height: 20,
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  saveTouchable: {
    width: 20,
    height: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editTouchable: {
    width: 20,
    height: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
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
    marginHorizontal: 5,
    color: '#000',
  },
  phoneSaveView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  phoneText: {
    color: '#000',
    fontSize: 15,
  },
  nameEditView: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: 10,
    // marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  editTxtImgView: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 5,
    backgroundColor: '#000',
    borderBottomWidth: 2,
    borderColor: 'white',
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
    borderTopWidth: 1,
  },
  listView: {
    // flex: 1,
    // marginVertical: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  itemView: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 5,
  },
  footerTouchable: {
    flexDirection: 'row',
    width: 20,
    height: 25,
    marginHorizontal: 20,
  },
  footerLineView: {
    width: 1,
    height: 30,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  listTxtWidth: {
    width: '48%',
  },
  viewTxt: {
    width: '100%',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  rowDirection: {
    flexDirection: 'row',
  },
  estimateTotalTxt: {
    color: '#000',
    fontWeight: 'bold',
    width: '70%',
    paddingLeft: 10,
  },
  estimateTotalPrice: {
    width: '30%',
    textAlign: 'right',
    paddingRight: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  discountPrice: {
    width: '30%',
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 14,
  },
  discountTxt: {
    paddingLeft: 10,
    width: '70%',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  costView: {
    justifyContent: 'space-between',
    height: 90,
    paddingVertical: 10,
  },
});
