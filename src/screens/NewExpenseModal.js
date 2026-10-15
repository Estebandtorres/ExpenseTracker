import {View, Button,  TextInput, Alert, StyleSheet} from 'react-native';

export default function NewExpenseModal() {
    const HandleGuardar = () => {
        Alert.alert("Gasto guardado", "El gasto ha sido guardado exitosamente.");
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                placeholder="Ingrese el nombre del gasto"
                keyboardType="default"
            />
            <TextInput style={styles.input}
                placeholder="Ingrese el monto del gasto"
                keyboardType="numeric"
            />

            <TextInput style={styles.input}
                placeholder="Ingrese la Categoría del gasto"
                keyboardType="default"
            />
            <Button 
                title="Guardar Gasto"
                onPress={HandleGuardar}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: '#080808',
        padding: 25,
        borderRadius: 20,
        marginBottom: 15,
        paddingHorizontal: 16,

    },
    container: {
        justifyContent: 'center',
        width: '70%',
    }
})