import {Text, View, Dimensions} from 'react-native';
import React, {PureComponent} from 'react';
import {TabView} from 'react-native-tab-view';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

export default class tabsCls extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'first', title: 'First'},
        {key: 'second', title: 'Second'},
      ],
    };
  }

  renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute foo={this.props.foo} />;
      case 'second':
        return <SecondRoute />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabView
        navigationState={{index: this.state.index, routes: this.state.routes}}
        renderScene={this.renderScene}
        onIndexChange={inx => this.setState({index: inx})}
        initialLayout={{width: Dimensions.width}}
      />
    );
  }
}
