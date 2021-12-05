import TrackPlayer, { Capability } from "react-native-track-player";

export const playTrack = async id => {
    const allSongs = await TrackPlayer.getQueue()
    const index = allSongs.map(itm => itm.id).indexOf(id);
    await TrackPlayer.skip(index)
    await TrackPlayer.play();
}

export const play = async () => {
    await TrackPlayer.play();
}
export const pause = async () => {
    await TrackPlayer.pause();
}
export const next = async () => {
    await TrackPlayer.skipToNext();
    await TrackPlayer.play();
}
export const previous = async () => {
    await TrackPlayer.skipToPrevious();
    await TrackPlayer.play();
}
export const seekTo = async (duration: number) => {
    await TrackPlayer.seekTo(duration);
}

export const initTrackPlayer = async () => {
    await TrackPlayer.setupPlayer({})
}

export const updateTrackPlayerOptions = async () => {
    TrackPlayer.updateOptions({
        // Media controls capabilities
        capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            // Capability.Stop,
        ],

        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
        ],
    });
}
