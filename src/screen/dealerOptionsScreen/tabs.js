import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function tabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      })}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
