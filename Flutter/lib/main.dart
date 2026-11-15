import 'package:flutter/material.dart';

void main() => runApp(const MaterialApp(home: Counter()));

// A StatefulWidget: call setState and Flutter rebuilds the widget tree below.
class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Hello, Flutter')),
      body: Center(child: Text('Clicked $_count times')),
      floatingActionButton: FloatingActionButton(
        onPressed: () => setState(() => _count++),
        child: const Icon(Icons.add),
      ),
    );
  }
}
