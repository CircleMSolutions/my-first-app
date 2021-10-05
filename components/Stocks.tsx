import React, { useState } from "react"
import { FlatList, Text, Button, View, StyleSheet } from "react-native"

interface Stock {
    symbol: string;
    type: string;
    last: string;
    name: string;
    change: string;
}
const tickers = ["AAPL", "JPM", "DIS", "SBUX", "TGT", "MSFT", "AEVA"]
const url = `https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=${tickers.join("%7C")}&output=json`

const Stocks: React.FC = () => {
    const [stocks, setStocks] = useState<Stock[]>([]) 
    
    const refreshHandler = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setStocks(data.FormattedQuoteResult.FormattedQuote as Stock[])
            })
            .catch(error => console.log(error))
    }

    return (
        <>
        <Button title="Refresh Stocks" onPress={refreshHandler}></Button>
        <FlatList
        style={{paddingHorizontal: 10}}
        keyExtractor={item => item.symbol}
        data={stocks}
        renderItem={item => (
            <View style={styles.card}>
                <View style={styles.name}>
                    <Text style={styles.symbol}>{item.item.symbol}</Text>
                    <Text>{item.item.name}</Text>
                </View>
                <View>
                    <Text style={styles.last}>{item.item.last}</Text>
                    <Text style={{
                        textAlign: "right",
                        fontSize: 14,
                        color: item.item.change.indexOf('+') === -1 ? 'red' : 'green'
                    }}>{item.item.change}</Text>
                </View>
            </View>
        )}
        >
        </FlatList>
        </>
    )
}

const styles = StyleSheet.create({
    symbol: {
        fontSize: 24
    },
    card: {
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.65,
        
        elevation: 3,
    },
    name: {
        flex: 1
    },
    last: {
        fontSize: 34,
        textAlign: "right"
    },
    change: {
        fontSize: 14,
        textAlign: "right"
    }
})

export default Stocks