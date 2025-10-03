
import { Image, Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../Redux/FavoriteSlice';

function FavoritesPage() {
    const favorites = useSelector((state) => state.favorite.favorites);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Favorites Page</Text>
                <Text style={styles.subHeaderText}>
                    {favorites.length} {favorites.length === 1 ? 'item' : 'items'}
                </Text>
            </View>

            {favorites.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No favorites yet</Text>
                    <Text style={styles.emptySubText}>Start adding your favorite items</Text>
                </View>
            ) : (
                <ScrollView contentContainerStyle={styles.listContainer}>
                    {favorites.map((item) => (
                        <View key={item.id ?? item.name} style={styles.card}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
                                <Text style={styles.description} numberOfLines={3}>{item.description}</Text>

                                <TouchableOpacity
                                    style={styles.removeButton}
                                    onPress={() => dispatch(removeFavorite(item.id))}
                                >
                                    <Text style={styles.buttonText}>Remove from Favorites</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 16,
        paddingTop: 20,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5.46,
        elevation: 9,
    },
    headerText: {
        textTransform: 'uppercase',
        fontFamily: 'Arial',
        shadowColor: '#ff6347',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        textShadowColor: '#ff6347',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#ff6347',
        paddingBottom: 6,
        letterSpacing: 2,
        fontSize: 32,
        fontWeight: '900',
        lineHeight: 36,
        color: '#ff6347',
        textAlign: 'center',
        marginBottom: 8,
    },
    subHeaderText: {
        fontSize: 14,
        color: '#666666',
        textAlign: 'center',
        marginTop: 4,
        textTransform: 'capitalize',
        letterSpacing: 1,
        fontWeight: '500',
        fontStyle: 'italic',
        fontFamily: 'Arial',
        textShadowColor: '#ff6347',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
        marginBottom: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    emptyText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333333',
        marginBottom: 16,
    },
    emptySubText: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 22,
        fontStyle: 'italic',
        fontFamily: 'Arial',
        textShadowColor: '#ff6347',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    listContainer: {
        padding: 16,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    image: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
    },
    infoContainer: {
        padding: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: '#222222',
        marginBottom: 6,
        textTransform: 'capitalize',
        letterSpacing: 1,
        fontFamily: 'Arial',
        textShadowColor: '#ff6347',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#ff6347',
        paddingBottom: 4,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#555555',
        marginBottom: 12,
        lineHeight: 20,
        fontStyle: 'italic',
        fontFamily: 'Arial',
        textShadowColor: '#ff6347',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
        minHeight: 60,
        maxHeight: 80,
        overflow: 'hidden',
        borderBottomWidth: 1,
        borderBottomColor: '#ffcccc',
        paddingBottom: 6,
        marginBottom: 10,
        textAlign: 'justify',
        letterSpacing: 0.5,
        wordSpacing: 1,
        opacity: 0.9,
        backgroundColor: 'rgba(255, 99, 71, 0.08)',
        borderRadius: 6,
        padding: 8,
    },
    removeButton: {
        backgroundColor: '#e50914',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#e50914',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
});

export default FavoritesPage;
