import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../Redux/FavoriteSlice';
export default function Card({ image, name, description }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite({ image, name, description }));
    navigation.navigate('Favorites');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.description} numberOfLines={3}>{description}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('details', { image, name, description })}
        >
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>



        <TouchableOpacity
          style={styles.AddtoFavoritesButton}
          onPress={handleAddFavorite}
        >
          <Text style={styles.buttonText}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    margin: 8,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#ccc',
    marginBottom: 10,
    lineHeight: 18,
  },
  button: {
    backgroundColor: '#e50914',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  AddtoFavoritesButton: {
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#ff6347',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#ac26ea8a',
    shadowOpacity: 0.9,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 5 },
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
