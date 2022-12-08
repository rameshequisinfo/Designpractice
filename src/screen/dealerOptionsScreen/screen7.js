import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class screen7 extends Component {
  renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <TouchableOpacity style={styles.leftArrowTouchable}>
          <Image
            source={require('./Images/left-arrow.png')}
            resizeMode={'contain'}
            style={styles.imgSize}
            tintColor={'white'}
          />
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={{color: 'white'}}>Score Card</Text>
          <Text style={{color: 'blue'}}>Reteif Schwartzal, CHC</Text>
        </View>
        <TouchableOpacity style={styles.reloadTouchable}>
          <Image
            source={require('./Images/reload.png')}
            resizeMode={'contain'}
            style={styles.imgSize}
            tintColor={'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.reloadTouchable}>
          <Image
            source={require('./Images/filter.png')}
            resizeMode={'contain'}
            style={styles.imgSize}
            tintColor={'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.leftArrowTouchable}>
          <Image
            source={require('./Images/help.png')}
            resizeMode={'contain'}
            style={styles.imgSize}
            tintColor={'white'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderImageView = () => {
    return (
      <View style={styles.imageView}>
        <Image
          source={require('./Images/jungle.jpg')}
          resizeMode={'stretch'}
          style={styles.imgSize}
        />
        <Text style={styles.bannerText}>Scorring Screen Banner</Text>
      </View>
    );
  };

  renderMiddleImageView = () => {
    return (
      <View style={styles.middleView}>
        <View style={styles.ludoImgTextView}>
          <View style={styles.ludoView}>
            <TouchableOpacity style={styles.skeletonTouchable}>
              <Image
                source={require('./Images/ludo.jpg')}
                resizeMode={'contain'}
                style={styles.imgSize}
              />
            </TouchableOpacity>
          </View>
          <Text>Kyalami</Text>
          <Text>Hotels: (9/18)</Text>
        </View>
        <View style={styles.profileImgView}>
          <View style={styles.profileTextView}>
            <View style={styles.profileView}>
              <TouchableOpacity style={styles.skeletonTouchable}>
                <Image
                  source={require('./Images/profile.jpg')}
                  resizeMode={'contain'}
                  style={styles.imgSize}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.eightView}>
              <Text>8</Text>
            </View>
            <View style={styles.mView}>
              <Text>M</Text>
            </View>
            <View style={styles.flagView}>
              <TouchableOpacity style={styles.flagTouchable}>
                <Image
                  source={require('./Images/flag.png')}
                  resizeMode={'contain'}
                  style={styles.imgSize}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text>Reteif Schwartzal</Text>
          <Text>Tournament Name</Text>
        </View>
        <View style={styles.skeletonView}>
          <View style={styles.skeletonImgView}>
            <TouchableOpacity style={styles.skeletonTouchable}>
              <Image
                source={require('./Images/skeleton.jpg')}
                resizeMode={'contain'}
                style={styles.imgSize}
              />
            </TouchableOpacity>
          </View>
          <Text>7:02 am</Text>
          <Text>Start Hotel(5)</Text>
        </View>
        <View style={styles.directionView}>
          <TouchableOpacity style={styles.directionImg}>
            <Image
              source={require('./Images/direction.png')}
              resizeMode={'contain'}
              style={styles.imgSize}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderTabs = () => {
    return (
      <View style={styles.tabView}>
        <Text style={styles.menuText}>INDIVIDUAL</Text>
        <Text style={styles.menuText}>FOURBALL</Text>
        <Text style={styles.menuText}>COMPETITION</Text>
        <Text style={styles.menuText}>MATCHPLAY</Text>
      </View>
    );
  };
  renderCompType = () => {
    return(
      <View style={{height:40,backgroundColor:'gray'}}>
        <View style={{height:5,backgroundColor:'white'}}></View>  
        <View style={{height:35,backgroundColor:'gray',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10,marginTop:10}}>
          <Text style={{width:250,height:30,color:'white',fontWeight:'bold'}}>COMP.TYPE</Text>
          <Text style={{width:50,height:30,textAlign:'center',color:'white',fontWeight:'bold',backgroundColor:'lightblue'}}>R1</Text>
          <Text style={{width:50,height:30,textAlign:'center',color:'white',fontWeight:'bold'}}>R2</Text>
        </View>  
      </View>
    )
  }
  render() {
    return (
      <View style={styles.mainView}>
        {this.renderHeader()}
        {this.renderImageView()}
        {this.renderTabs()}
        {this.renderMiddleImageView()}
        {this.renderCompType()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  imgSize: {
    width: '100%',
    height: '100%',
  },
  leftArrowTouchable: {
    width: 25,
    height: 48,
  },
  reloadTouchable: {
    width: 25,
    height: 48,
    marginRight: 5,
  },
  textView: {
    flex: 1,
    marginHorizontal: 10,
  },
  tabView: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding:10,
    backgroundColor: 'blue',
  },
  menuText: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  directionView: {
    height: 35,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    overflow: 'hidden',
    position: 'absolute',
    top: 10,
    right: 5,
    padding: 5,
  },
  directionImg: {
    height: 60,
    width: 60,
  },
  imageView: {
    height: 100,
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skeletonView: {
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagView: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    overflow: 'hidden',
    position: 'absolute',
    top: 85,
    left: 35,
  },
  skeletonImgView: {
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 5,
  },
  skeletonTouchable: {
    height: 100,
    width: 100,
  },
  flagTouchable: {
    height: 30,
    width: 30,
  },
  mView: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    position: 'absolute',
    top: 45,
    left: -10,
  },
  eightView: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
    position: 'absolute',
    top: 45,
    right: -10,
  },
  profileView: {
    borderRadius: 60,
    overflow: 'hidden',
  },
  profileTextView: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImgView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ludoView: {
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 5,
  },
  ludoImgTextView: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleView: {
    height: 200,
    flexDirection: 'row',
    backgroundColor: 'gray',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
  },
  bannerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    textAlign: 'center',
  },
});
