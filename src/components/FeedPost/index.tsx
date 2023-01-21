import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo, Ionicons, Feather } from "@expo/vector-icons";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const FeedPost = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>sion.kim</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          color="black"
          style={styles.threeDots}
        />
      </View>
      {/* Content */}
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        style={styles.image}
      />
      {/* Footer */}
      <View style={styles.footerContainer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={"hearto"}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />

          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: "auto" }}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Linked by <Text style={styles.boldText}>sion</Text> and{" "}
          <Text style={styles.boldText}>5</Text> others
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.boldText}>sion.kimm</Text> Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Quos commodi iusto nemo quibusdam
          voluptatem velit ratione molestiae minus placeat. A exercitationem
          voluptatibus ab numquam ipsam tenetur enim quibusdam eius eveniet.
        </Text>

        {/* Comments */}
        <Text style={{ color: colors.grey }}>View all 10 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.boldText}>sion.kimm</Text> Lorem ipsum dolor
            sit, amet consectetur adipisicing elit.
          </Text>
          <AntDesign
            name={"hearto"}
            size={14}
            style={styles.icon}
            color={colors.black}
          />
        </View>

        {/* Posted date */}
        <Text style={{ color: colors.grey }}>21 January, 2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: "auto",
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  footerContainer: {
    padding: 10,
  },
  text: {
    color: colors.black,
  },
  boldText: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentText: {
    color: colors.black,
    flex: 1,
  },
});

export default FeedPost;
