import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
});

const Resume = () => {
    return (
        <Document
            title="Tony's Resume"
            author="Tony Vallescas"
            subject="Resume"
        >
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>
                        dude
                    </Text>
                </View>
            </Page>
        </Document>
    )
}

export default Resume;