import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient
        colors={["#4A148C", "#7B1FA2", "#4A148C"]}
        style={{ flex: 1 }}
      >
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Feather name="bar-chart" size={24} color="white" />
            <Text style={{ fontSize: 16, fontWeight: "700", color: "white" }}>
              Magitech HR Portal
            </Text>
            <Entypo name="lock" size={24} color="white" />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Pressable
              onPress={() => router.push("/(home)/employees")}
              style={{
                backgroundColor: "white",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-people-sharp" size={28} color="#7B1FA2" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Employee List
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(home)/markattendance")}
              style={{
                backgroundColor: "white",
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="ios-people-sharp" size={28} color="#7B1FA2" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              gap: 5,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#FFA000",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 25,
                  backgroundColor: "white",
                  outlineColor: "#7B1FA2",
                  outlineStyle: "solid",
                  outlineWidth: 3.5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="newspaper-outline" size={24} color="#7B1FA2" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                  color: "white",
                }}
              >
                Attendance Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  outlineColor: "#7B1FA2",
                  outlineStyle: "solid",
                  outlineWidth: 3.5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="#7B1FA2" />
              </View>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(home)/summary")}
              style={{
                backgroundColor: "#FFA000",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 25,
                  backgroundColor: "white",
                  outlineColor: "#7B1FA2",
                  outlineStyle: "solid",
                  outlineWidth: 3.5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Octicons name="repo-pull" size={24} color="#7B1FA2" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                  color: "white",
                }}
              >
                Summary Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  outlineColor: "#7B1FA2",
                  outlineStyle: "solid",
                  outlineWidth: 3.5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="#7B1FA2" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#FFA000",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 25,
                  backgroundColor: "white",
                  outlineColor: "#7B1FA2",
                  outlineStyle: "solid",
                  outlineWidth: 3.5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Octicons name="report" size={24} color="#7B1FA2" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                  color: "white",
                }}
              >
                Generate All Reports
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  outlineColor: "#7B1FA2",
                  outlineStyle: "solid",
                  outlineWidth: 3.5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="#7B1FA2" />
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#FFA000",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 25,
                  backgroundColor: "white",
                  outlineColor: "#7B1FA2",
                  outlineStyle: "solid",
                  outlineWidth: 3.5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people" size={24} color="#7B1FA2" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "600",
                  flex: 1,
                  color: "white",
                }}
              >
                Overtime Employees
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  outlineColor: "#7B1FA2",
                  outlineStyle: "solid",
                  outlineWidth: 3.5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color="#7B1FA2" />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="book-check"
                  size={24}
                  color="#7B1FA2"
                />
              </View>
              <Text style={{ marginTop: 7 }}>Attendance Criteria</Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="human-capacity-increase"
                  size={24}
                  color="#7B1FA2"
                />
              </View>
              <Text style={{ marginTop: 7 }}>Increased Workflow</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",

                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="piggy-bank-outline"
                  size={24}
                  color="#7B1FA2"
                />
              </View>
              <Text style={{ marginTop: 7 }}>Cost Savings</Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="account-arrow-up"
                  size={24}
                  color="#7B1FA2"
                />
              </View>
              <Text style={{ marginTop: 7 }}>Employee Performance</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
