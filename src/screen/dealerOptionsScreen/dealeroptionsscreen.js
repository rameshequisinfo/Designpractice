import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'react';

const DATA = [
  {
    id: '1',
    title: 'Start Audit',
    desc: 'Create new audit report, Lorem Ipsumsimply dummy text of the printing',
    imgPath: require('./Images/save.png'),
  },
  {
    id: '2',
    title: 'Review Action Plan',
    desc: 'Create new audit report, Lorem Ipsumsimply dummy text of the printing',
    imgPath: require('./Images/search.png'),
  },
  {
    id: '3',
    title: 'Dealer Score Card',
    desc: 'Create new audit report, Lorem Ipsumsimply dummy text of the printing',
    imgPath: require('./Images/save-number.png'),
  },
];

export default class dealeroptionsscreen extends Component {
  renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <TouchableOpacity style={styles.headerTouchable}>
          <Image
            source={require('./Images/menu.png')}
            style={styles.headerImgSize}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Dealers</Text>
        <TouchableOpacity style={styles.headerTouchable}>
          <Image
            source={require('./Images/reload.png')}
            style={styles.imgSize}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderListTitle = () => {
    return (
      <View style={styles.listTitleView}>
        <Text style={styles.listTitleText}>KK Automobile</Text>
        <Text style={styles.listText}>(531343)</Text>
      </View>
    );
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.itemView}>
        <TouchableOpacity style={styles.itemListImg}>
          <Image
            source={item.imgPath}
            style={styles.imgSize}
            resizeMode={'contain'}
          />
        </TouchableOpacity>

        <View style={styles.container}>
          <View style={styles.titlePendingView}>
            <View style={styles.container}>
              <Text style={styles.itemTitleText}>{item.title}</Text>
            </View>
            {item.id == 2 ? (
              <TouchableOpacity style={styles.itemTitlePendingText}>
                <Text>3 Pending</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <Text>{item.desc}</Text>
        </View>
        <TouchableOpacity style={styles.rightArrowImg}>
          <Image
            source={require('./Images/right-arrow.png')}
            style={styles.imgSize}
            resizeMode={'contain'}
            tintColor={'gray'}
          />
        </TouchableOpacity>
      </View>
    );
  };
  renderList = () => {
    return (
      <View>
        <FlatList
          data={DATA}
          extraData={['', '', '', '']}
          renderItem={this.renderItem}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderListTitle()}
        {this.renderList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: '8%',
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTouchable: {
    height: '100%',
    aspectRatio:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  imgSize: {
    height: '100%',
    width: '100%',
  },
  headerImgSize: {
    height: '60%',
    width: '60%',
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
  itemView: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 15,
  },
  itemListImg: {
    width: '10%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  rightArrowImg: {
    width: '5%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 5,
  },
  itemTitleText: {
    fontWeight: 'bold',
    fontSize: 16,
    width: '70%',
    color: 'black',
  },
  titlePendingView: {
    flex: 1,
    flexDirection: 'row',
  },
  itemTitlePendingText: {
    fontSize: 12,
    backgroundColor: '#EFDF00',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    borderRadius: 3,
  },
});
