import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 'c001',
      name: 'Sofi Pal',
      status: 'Online',
      imageURL:
        'https://media.istockphoto.com/id/1496615445/photo/portrait-of-beautiful-happy-woman-smiling-during-sunset-outdoor.jpg?s=612x612&w=0&k=20&c=_HXfCjbresNg_9Y-z1XHrw-JPBzov9l39RK_8Qmv7nk=',
    },
    {
      uid: 'c002',
      name: 'Rahul Verma',
      status: 'Offline',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlPlpTtK_z4wQ4W74DmV5pxpZYatxBAmzrg&s',
    },
    {
      uid: 'c003',
      name: 'Aisha Shean',
      status: 'Busy',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcn9ZUKp7Hh6yRwxD0VPYdNvrsnq4Oth0VQ&s',
    },
    {
      uid: 'c004',
      name: 'Karan Mehta',
      status: 'Away',
      imageURL:
        'https://cdn-01.cms-ap-v2i.applyflow.com/pinnacle-people/wp-content/uploads/2023/09/slide-2.png',
    },
    {
      uid: 'c005',
      name: 'Neha Sharma',
      status: 'Online',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQobabmcqKawRpzyVGX4BJtF0XXaef2fwA2Xw&s',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(contact => (
          <TouchableOpacity key={contact.uid} style={styles.userContainer}>
            <Image
              source={{ uri: contact.imageURL }}
              style={styles.userImage}
            />
            <Text>{contact.name}</Text>
            <Text>
              {'('}
              {contact.status}
              {')'}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    color: 'white',
  },
  container: {
    backgroundColor: '#f8f4f4ff',
    padding: 10,
    height: 'auto',
  },
  userContainer: {
    borderBottomColor: '#d1d1d1ff',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    paddingVertical: 4,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: '#2361e7ff',
    borderWidth: 2,
  },
});
