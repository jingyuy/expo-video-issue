import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { VideoView, useVideoPlayer } from 'expo-video';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

function VideoScreen({ videoSource }: { videoSource: number }) {
  const videoPlayer = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });

  return (
    <View style={styles.container}>
    <VideoView
      contentFit="cover"
      player={videoPlayer}
      style={styles.video}
      nativeControls={false}
    />
    </View>
  );
}

export default function VideoViewTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Video1"
        children={() => <VideoScreen videoSource={require('@/assets/videos/unit_language_basics.mp4')} />}
      />
      <Tab.Screen
        name="Video2"
        children={() => <VideoScreen videoSource={require('@/assets/videos/unit_greetings_and_introductions.mp4')} />}
      />
      <Tab.Screen
        name="Video3"
        children={() => <VideoScreen videoSource={require('@/assets/videos/unit_work_and_school.mp4')} />}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
