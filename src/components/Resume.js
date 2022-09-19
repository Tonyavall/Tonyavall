import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start'
    },
    topHeader: {
        width: '100vw',
        height: '250px',
        border: '2px solid red'
    },
    resumeProfilePicture: {
        borderRadius: 'rounded'
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
                <View style={styles.topheader}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Image></Image>
                        <Text style>Tony Vallescas</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Resume;